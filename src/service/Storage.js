import { Firebase } from './Firebase'
class Storage extends Firebase {
  constructor() {
    super()
    this.storage = this.getFirebase().storage()
  }
  createRef(path) {
    return this.storage.ref(path)
  }
  createRefFromULR(url) {
    return this.storage.refFromURL(url)
  }
  upload(path, file, ref) {
    if (ref) {
      return this.storage.ref(ref).child(`${path}/${file.name}`).put(file)
    }
    return this.storage.ref().child(`${path}/${file.name}`).put(file)
  }
  delete(ref) {
    return ref.delete()
  }
}

export default new Storage()
