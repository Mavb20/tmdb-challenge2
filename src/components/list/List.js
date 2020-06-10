import {Lightning} from "wpe-lightning-sdk";
import {Item} from "../../components"

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra'}
            },
            Movies: {
                y: 75
            }
        }
    }

    _init() {
        this._index = 0
    }

    _handleLeft() {
        // @todo: update index and call setIndex
        if (this._index > 0 ) {
            this.setIndex(this._index - 1)
        }
    }

    _handleRight() {
        // @todo: update index and call setIndex
        if (this._index < this.movies.length - 1) {
            this.setIndex(this._index + 1)
        }
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
        this._index = index
        this.tag('Movies').setSmooth('x', this._index * -250)
    }

    set label(v) {
        // @todo: update list title
        this.tag('Label').patch({ text: { text: v }})
    }

    set movies(v) {
        // we add an array of object with type: Item
        this.tag("Movies").children = v.map((el, idx)=>{
            return {
                ref: 'ListItem-' + idx, //optional, for debug purposes
                type: Item,
                x: idx * 250,
                item: el //passing the item as an attribute
             };
        });
    }

    get movies() {
        return this.tag("Movies").children;
    }

    get activeItem() {
        // @todo: return selected item
        return this._getFocused();
    }

    _getFocused() {
        // @todo:
        // return activeItem
        return this.movies[this._index]
    }
}
