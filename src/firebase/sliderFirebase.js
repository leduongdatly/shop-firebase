import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const siliderCollectionRef = collection(db, "slider");

const sliderFirebase = {
    getAll: () => {
        return getDocs(siliderCollectionRef);
    }
}

export default sliderFirebase;