export type LayoutFieldText = {
  id: number,
  innerText: string;
  // FIXME: Сделать по типу CSSStyleDeclaration
  styles: {
    font: string,
    size: number,
    color: string,
    transformX: number,
    transformY: number,
  }
}
export type LayoutFieldsText = LayoutFieldText[]
