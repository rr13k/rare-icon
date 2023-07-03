

export function addHoverClassEvent(svg?: any) {
    if(!svg)  throw new Error("svg is not defined")
    if(svg){
      svg.addEventListener('mouseenter', () => {
        svg.classList.add('hover')
      });
  
      svg.addEventListener('mouseleave', () => {
        svg.classList.remove('hover')
      });
    }
}