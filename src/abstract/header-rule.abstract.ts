export abstract class HeaderRule {
    private _headerCollection = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: ''
    };
  
    private _headerCollectionJSON = {
      'Content-Type': 'application/json',
      Authorization: ''
    };
  
    private _headerCollectionPatchJSON = {
      'Content-Type': 'application/json-patch+json',
      Authorization: ''
    };
  
    get HeaderCollectionContentType() {
      return this._headerCollection;
    }
  
    get HeaderCollection() {
      return this._headerCollectionJSON;
    }
  
    get HeaderCollectionPatchJSON() {
      return this._headerCollectionPatchJSON;
    }
  }
  