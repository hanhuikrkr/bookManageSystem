import BaseActions from "../util/baseAction";

class Book extends BaseActions {
    async isbnSearchBook(param) {
        return await this.get("http://book.feelyou.top/isbn/"+param);
      }
}

export default new Book();
