export type LayoutFieldText = {
  id: number,
  innerText: string;
  // FIXME: Сделать по типу CSSStyleDeclaration
  styles: {
    font: string,
    size: number,
    color: string,
  }
}
export type LayoutFieldsText = LayoutFieldText[]

export type ColorScheme = {
  id: number,
  label: string,
  color: string,
  stars: {
    style: {
      fill: string;
    }
  },
  constellations: {
    lineStyle: {
      stroke: string;
    }
  },
  background: {
    stroke: string;
    fill: string;
  },
}

export type ColorsScheme = ColorScheme[]
