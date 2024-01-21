/**
 * @param {HTMLElement} element 
 * @param {String} selector 
 * @returns 
 */
export function closestAncestor (element, selector) {
    // 如果浏览器支持 closest 方法，则直接使用
    if (element.closest) {
      return element.closest(selector);
    }
  
    // 向上遍历祖先元素
    while (element && element.nodeType === 1) {
      // 检查当前元素是否匹配选择器
      if (matches(element, selector)) {
        return element;
      }
  
      // 向上移动到父元素
      element = element.parentNode;
    }
  
    // 没有匹配的祖先元素，返回 null
    return null;
  }
  
  // matches 函数用于检查元素是否匹配选择器
  function matches(element, selector) {
    // 如果浏览器支持 matches 方法，则直接使用
    if (element.matches) {
      return element.matches(selector);
    }
  
    // 兼容旧版本浏览器
    let matchesSelector =
      element.matchesSelector ||
      element.mozMatchesSelector ||
      element.webkitMatchesSelector ||
      element.oMatchesSelector ||
      element.msMatchesSelector;
  
    if (matchesSelector) {
      return matchesSelector.call(element, selector);
    }
  
    // 如果都不支持，则使用兼容的方法
    let matches = (element.document || element.ownerDocument).querySelectorAll(selector);
    let i = matches.length;
    while (--i >= 0 && matches.item(i) !== element) {}
    return i > -1;
  }

  