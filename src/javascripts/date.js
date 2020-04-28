// https://date-fns.org/

import { formatDistanceToNowStrict, subDays, parseISO, startOfTomorrow } from 'date-fns'

const now = new Date();
const tomorrow = startOfTomorrow();
const myAge = formatDistanceToNowStrict(parseISO('1983-02-25'), { addSuffix: false});

document.getElementById("dateNow").innerHTML = now;
document.getElementById("dateTomorrow").innerHTML = tomorrow;
document.getElementById("dateMyAge").innerHTML = myAge;