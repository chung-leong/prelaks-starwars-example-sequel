class SWAPI {
  /**
   * Remember the data source
   */
  constructor(dataSource) {
    this.dataSource = dataSource;
  }

  /**
   * Fetch one object from data source
   *
   * @param  {String} url
   * @param  {Object} options
   *
   * @return {Promise<Object>}
   */
  fetchOne(url, options) {
    return this.dataSource.fetchOne(url, options);
  }

  /**
   * Fetch a list of objects from data source
   *
   * @param  {String} url
   * @param  {Object} options
   *
   * @return {Promise<Array>}
   */
  fetchList(url, options) {
    return this.dataSource.fetchList(url, options);
  }

  /**
   * Fetch multiple objects from data source
   *
   * @param  {Array<String>} urls
   * @param  {Object} options
   *
   * @return {Promise<Array>}
   */
  fetchMultiple(urls, options) {
    return this.dataSource.fetchMultiple(urls, options);
  }
}

export {
  SWAPI as default,
  SWAPI,
};
