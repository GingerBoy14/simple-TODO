import { Firebase } from './Firebase'

class Firestore extends Firebase {
  constructor() {
    super()
    this.firestore = this.getFirebase().firestore()
  }
  /**
   * Set data to document in firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   * @param {object} data - data that need to set
   */
  set(path, docId, data) {
    this.getCollection(path).doc(docId).set(data)
  }
  /**
   * Get document from firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   */
  async get(path, docId) {
    const res = await this.getCollection(path).doc(docId).get()
    return res.data()
  }
  /**
   * Update document data in firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   * @param {object} data - data that need to set
   */
  update(path, docId, data) {
    this.getCollection(path).doc(docId).update(data)
  }
  /**
   * Add data to firestore collection
   * @param {string} path - collection path
   * @param {object} data - data that need to set
   */
  add(path, data) {
    return this.getCollection(path).add(data)
  }
  /**
   * Delete document from firestore collection
   * @param {string} path - collection path
   * @param {string} docId - document ID in this collection
   */
  delete(path, docId) {
    return this.getCollection(path).doc(docId).delete()
  }
  /**
   * Get full firestore collection
   * @param {string} collectionName - collection path
   */
  getCollection(collectionName) {
    return this.firestore.collection(collectionName)
  }
  /**
   * Get full but sorted firestore collection
   * @param {string} collectionName - collection path
   * @param {Object} sort - sort configuration
   * @param {string} sort.func - name of sorting function
   * @param {string} sort.fieldPath - name of field witch we should use to sort
   */
  getSortedCollection(collectionName, sort) {
    return this.firestore.collection(collectionName)[sort.func](sort.fieldPath)
  }
  /**
   * Set listener for some collection/document update
   * @param {*} ref - collection reference
   * @param {callback} onUpdate - function witch will be execute on listener response
   */
  setListener(ref, onUpdate) {
    return ref.onSnapshot(onUpdate)
  }
}

export default new Firestore()
