class Shop extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
  constructor () {
    super('shops')
    this.fields = this.fields.concat(['name', 'address'])
  }
}
