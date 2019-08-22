(function(){
  console.log('entrypoint')

  class LoadingBar extends HTMLElement {

    static get observedAttributes(){
      return ['progress'];
    }
  
    constructor(){
      super();
  
      this.start = 0;
      this.progress = 0;
      this.end = 100;

      this.width = 400;
      this.height = 20;
      
      this.color = 'lightblue';
      this.backgroundColor = 'white';
    }
  
    connectedCallback(){
      console.log('connected')
  
      this.start = this.getAttribute('start') || this.start;
      this.progress = this.getAttribute('progress') || this.progress;
      this.end = this.getAttribute('end') || this.end;
  
      this.width = this.getAttribute('width') || this.width;
      this.height = this.getAttribute('height') || this.height;

      this.color = this.getAttribute('color') || this.color;
      this.backgroundColor = this.getAttribute('backgroundColor') || this.backgroundColor;

      if (!this.shadowRoot) {
        const container = document.createElement('div');

        container.innerHTML = `
        <style>
          :host {
            --width: ${this.width}px;
            --height: ${this.height}px;
            width: var(--width);
            height: var(--height);
          }

          svg {
            width: var(--width);
            height: var(--height);
          }

          label {
            position: absolute; 
            left: 0px; 
            top: 0px; 
            width: ${this.width}px; 
            height: ${this.height}px; 
            margin: 10px;
            text-align: center;
          }

        </style>  
        <label id="percentage">${Math.floor(this.progress / this.end * 100)} %</label>
        <svg id="lbar" style="border: 1px solid gray; border-radius: 10px;">
          <rect x="0" y="0" rx="10" ry="10" width="${this.width * (this.end / this.end)}" height="${this.height}" stroke="gray" fill="${this.backgroundColor}"/>
          <rect x="0" y="0" rx="10" ry="10" width="${this.width * (this.progress / this.end)}" height="${this.height}" stroke="gray" fill="${this.color}"/>
        </svg>
        `
        
        // this.svg = document.createElement('svg');
        // this.svg.appendChild(document.createElement('rect'))

        // container.appendChild(this.svg)

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(container); 
      }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom loadingbar element attributes changed.');
      this.reDraw()
      console.log(name, newValue)
    }

    setHeight(newHeight){

    }

    setWidth(newWidth){
      
    }

    addProgress(newProgress){
      if(this.progress < this.end){
        this.progress += newProgress;
        this.reDraw()
        return this.progress;
      }
      else{
        this.progress = this.end;
      }
    }

    reDraw(){
      let svg = this.shadowRoot.querySelector('#lbar');
      let label = this.shadowRoot.querySelector('#percentage');
      
      svg.innerHTML = `
      <rect x="0" y="0" rx="10" ry="10" width="${this.width * (this.end / this.end)}" height="${this.height}" stroke="gray" fill="${this.backgroundColor}"/>
      <rect x="0" y="0" rx="10" ry="10" width="${this.width * (this.progress / this.end)}" height="${this.height}" stroke="gray" fill="${this.color}"/>
      `
      svg.style.border = '1px solid gray'
      svg.style.borderRadius = '10px'
      
      label.innerHTML = `${Math.floor(this.progress / this.end * 100) } %`
      label.style.width = `${this.width}px`
      label.style.height = `${this.height}px`
    }

    reset(){
      this.progress = this.start;
    }
    
  }
  
  customElements.define('simple-loading-bar', LoadingBar)
})()

