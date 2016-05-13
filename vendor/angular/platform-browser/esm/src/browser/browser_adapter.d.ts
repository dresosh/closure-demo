import { GenericBrowserDomAdapter } from './generic_browser_adapter';
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 */
export declare class BrowserDomAdapter extends GenericBrowserDomAdapter {
    parse(templateHtml: string): void;
    static makeCurrent(): void;
    hasProperty(element: any, name: string): boolean;
    setProperty(el: any, name: string, value: any): void;
    getProperty(el: any, name: string): any;
    invoke(el: any, methodName: string, args: any[]): any;
    logError(error: any): void;
    log(error: any): void;
    logGroup(error: any): void;
    logGroupEnd(): void;
    readonly attrToPropMap: any;
    query(selector: string): any;
    querySelector(el: any, selector: string): HTMLElement;
    querySelectorAll(el: any, selector: string): any[];
    on(el: any, evt: any, listener: any): void;
    onAndCancel(el: any, evt: any, listener: any): Function;
    dispatchEvent(el: any, evt: any): void;
    createMouseEvent(eventType: string): MouseEvent;
    createEvent(eventType: any): Event;
    preventDefault(evt: Event): void;
    isPrevented(evt: Event): boolean;
    getInnerHTML(el: any): string;
    getTemplateContent(el: any): Node;
    getOuterHTML(el: any): string;
    nodeName(node: Node): string;
    nodeValue(node: Node): string;
    type(node: HTMLInputElement): string;
    content(node: Node): Node;
    firstChild(el: any): Node;
    nextSibling(el: any): Node;
    parentElement(el: any): Node;
    childNodes(el: any): Node[];
    childNodesAsList(el: any): any[];
    clearNodes(el: any): void;
    appendChild(el: any, node: any): void;
    removeChild(el: any, node: any): void;
    replaceChild(el: Node, newChild: any, oldChild: any): void;
    remove(node: any): Node;
    insertBefore(el: any, node: any): void;
    insertAllBefore(el: any, nodes: any): void;
    insertAfter(el: any, node: any): void;
    setInnerHTML(el: any, value: any): void;
    getText(el: any): string;
    setText(el: any, value: string): void;
    getValue(el: any): string;
    setValue(el: any, value: string): void;
    getChecked(el: any): boolean;
    setChecked(el: any, value: boolean): void;
    createComment(text: string): Comment;
    createTemplate(html: any): HTMLElement;
    createElement(tagName: any, doc?: Document): HTMLElement;
    createElementNS(ns: any, tagName: any, doc?: Document): Element;
    createTextNode(text: string, doc?: Document): Text;
    createScriptTag(attrName: string, attrValue: string, doc?: Document): HTMLScriptElement;
    createStyleElement(css: string, doc?: Document): HTMLStyleElement;
    createShadowRoot(el: HTMLElement): DocumentFragment;
    getShadowRoot(el: HTMLElement): DocumentFragment;
    getHost(el: HTMLElement): HTMLElement;
    clone(node: Node): Node;
    getElementsByClassName(element: any, name: string): HTMLElement[];
    getElementsByTagName(element: any, name: string): HTMLElement[];
    classList(element: any): any[];
    addClass(element: any, className: string): void;
    removeClass(element: any, className: string): void;
    hasClass(element: any, className: string): boolean;
    setStyle(element: any, styleName: string, styleValue: string): void;
    removeStyle(element: any, stylename: string): void;
    getStyle(element: any, stylename: string): string;
    hasStyle(element: any, styleName: string, styleValue?: string): boolean;
    tagName(element: any): string;
    attributeMap(element: any): Map<string, string>;
    hasAttribute(element: any, attribute: string): boolean;
    hasAttributeNS(element: any, ns: string, attribute: string): boolean;
    getAttribute(element: any, attribute: string): string;
    getAttributeNS(element: any, ns: string, name: string): string;
    setAttribute(element: any, name: string, value: string): void;
    setAttributeNS(element: any, ns: string, name: string, value: string): void;
    removeAttribute(element: any, attribute: string): void;
    removeAttributeNS(element: any, ns: string, name: string): void;
    templateAwareRoot(el: any): any;
    createHtmlDocument(): HTMLDocument;
    defaultDoc(): HTMLDocument;
    getBoundingClientRect(el: any): any;
    getTitle(): string;
    setTitle(newTitle: string): void;
    elementMatches(n: any, selector: string): boolean;
    isTemplateElement(el: any): boolean;
    isTextNode(node: Node): boolean;
    isCommentNode(node: Node): boolean;
    isElementNode(node: Node): boolean;
    hasShadowRoot(node: any): boolean;
    isShadowRoot(node: any): boolean;
    importIntoDoc(node: Node): any;
    adoptNode(node: Node): any;
    getHref(el: Element): string;
    getEventKey(event: any): string;
    getGlobalEventTarget(target: string): EventTarget;
    getHistory(): History;
    getLocation(): Location;
    getBaseHref(): string;
    resetBaseElement(): void;
    getUserAgent(): string;
    setData(element: any, name: string, value: string): void;
    getData(element: any, name: string): string;
    getComputedStyle(element: any): any;
    setGlobalVar(path: string, value: any): void;
    requestAnimationFrame(callback: any): number;
    cancelAnimationFrame(id: number): void;
    performanceNow(): number;
}
