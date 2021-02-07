import Logan from './logan';

class RootStore {
  constructor() {
    this.logan = new Logan(this);
  }
}

export default RootStore;
