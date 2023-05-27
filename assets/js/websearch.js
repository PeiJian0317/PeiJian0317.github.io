
				//1.获取元素
  let input = document.querySelector('input')
  let ul = document.querySelector('.result-list')
 
  //2.注册事件
  //onfocus:成为焦点, 点击输入框的时候，出现闪烁光标，此时可以输入内容
  input.onfocus = function(){
    console.log('点击了，出现光标了，此时可以输入文字')
  //(1)显示ul
    ul.style.display = 'block'
  //(2)自身边框改变 （通过新增search类名）
    this.classList.add('search')
  }
 
  //onblur :失去焦点, 点击页面空白区域，光标消失。此时不可以输入内容
  input.onblur = function(){
    console.log('点其他地方了，光标消失了，此时不可以输入文字')
  //隐藏ul
    ul.style.display = 'none'
  //自身边框改变 （通过移除search类名）
    this.classList.remove('search')
  }