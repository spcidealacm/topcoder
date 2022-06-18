class CssProperty {
  constructor() {
    this.darkPrimaryColor = this.getCssRoot("--dark-primary-color")
    this.lightPrimaryColor = this.getCssRoot("--light-primary-color")
    this.screenColor = this.getCssRoot("--screen-color")
    this.screenLightColor = this.getCssRoot("--screen-light-color")
    this.clearColor = this.getCssRoot("--clear-color")
    this.clearDeepColor = this.getCssRoot("--clear-deep-color")
    this.equalColor = this.getCssRoot("--equal-color")
    this.equalDeepColor = this.getCssRoot("--equal-deep-color")
    this.deleteColor = this.getCssRoot("--delete-color")
    this.deleteDeepColor = this.getCssRoot("--delete-deep-color")
    this.transitionColor = this.getCssRoot("--transition-color")
    this.spanSize = this.getCssRoot("--span-size")
    this.gapSize = this.getCssRoot("--gap-size")
    this.darkCalculatorBgShadow = this.getCssRoot('--dark-calculator-background-shadow')
    this.lightCalculatorBgShadow = this.getCssRoot('--light-calculator-background-shadow')
    this.darkTextShadow = this.getCssRoot("--dark-text-shadow")
    this.lightTextShadow = this.getCssRoot("--light-text-shadow")
    this.textAreaWidth = this.getCssRoot("--text-area-width")
    this.textAreaScreenShadow = this.getCssRoot("--text-area-screen-shadow")
    this.lightSpanColor = this.getCssRoot("--light-span-color")
    this.lightSpanDeepColor = this.getCssRoot("--light-span-deep-color")
    this.lightSpanBackground = this.getCssRoot("--light-span-background")
    this.lightSpanBackgroundLinear = this.getCssRoot("--light-span-background-linear")
    this.lightSpanShadow = this.getCssRoot("--light-span-shadow")
    this.darkSpanColor = this.getCssRoot("--dark-span-color")
    this.darkSpanDeepColor = this.getCssRoot("--dark-span-deep-color")
    this.darkSpanBackground = this.getCssRoot("--dark-span-background")
    this.darkSpanBackgroundLinear = this.getCssRoot("--dark-span-background-linear")
    this.darkSpanBackground = this.getCssRoot("--dark-span-background")
    this.darkSpanShadow = this.getCssRoot("--dark-span-shadow")
    this.lightTextColor = this.darkPrimaryColor
    this.lightTextShadow = this.getCssRoot("--light-text-shadow")
    this.darkTextColor = this.lightPrimaryColor
    this.darkTextShadow = this.getCssRoot("--dark-text-shadow")
    this.lightSpanBeforeBorder = this.getCssRoot("--light-span-before-border")
    this.lightSpanBeforeDeepBackground = this.getCssRoot("--light-span-before-deep-background")
    this.lightSpanBeforeBackground = this.getCssRoot("--light-span-before-background")
    this.lightSpanBeforeBackgroundLinear = this.getCssRoot("--light-span-before-background-linear")
    this.lightSpanBeforeBoxShadow = this.getCssRoot("--light-span-before-box-shadow")
    this.darkSpanBeforeBorder = this.getCssRoot("--dark-span-before-border")
    this.darkSpanBeforeDeepBackground = this.getCssRoot("--dark-span-before-deep-background")
    this.darkSpanBeforeBackground = this.getCssRoot("--dark-span-before-background")
    this.darkSpanBeforeBackgroundLinear = this.getCssRoot("--dark-span-before-background-linear")
    this.darkSpanBeforeBoxShadow = this.getCssRoot("--dark-span-before-box-shadow")
    this.clearBeforeBackgroundLinear = this.getCssRoot("--clear-before-background-linear")
    this.deleteBeforeBackgroundLinear = this.getCssRoot("--delete-before-background-linear")
    this.equalBeforeBackgroundLinear = this.getCssRoot("--equal-before-background-linear")
  }

  getCssRoot(rootProp) {
    return getComputedStyle(document.documentElement).getPropertyValue(rootProp)
  }
}

const css = new CssProperty()

export { css }