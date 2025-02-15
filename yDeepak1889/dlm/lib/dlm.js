'use babel';
import { CompositeDisposable } from 'atom';
$ = jQuery = require ('jquery');

export default {
  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'dlm:iiitahacks': () => this.iiitahacks()
    }));
  },


  iiitahacks() {
    console.log('Dlm was toggled!');
    console.log("Success\n");
  }

};
