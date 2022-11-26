import {Subject} from "./Subject";
import {MagazineObserver} from "./MagazineObserver";
import {NewspaperObserver} from "./NewspaperObserver";

const subject = new Subject();
const magazineObserver = new MagazineObserver();
const newspaperObserver = new NewspaperObserver();

subject.subscribe(magazineObserver);
subject.subscribe(newspaperObserver);
subject.addNews('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');

subject.unsubscribe(newspaperObserver);
subject.addNews('Contrary to popular belief, Lorem Ipsum is not simply random text.');
