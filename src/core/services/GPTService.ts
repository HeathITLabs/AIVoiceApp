import Routes from "../routes/routes";
import { Message } from "../types/types";
var util = require('util');

export async function SendQuery(conversation: Message[]) {
    console.log('INSIDE GPT SERVICE') //RESULTS UNDEFINED
    const result = await fetch(Routes.GetGPTResponse,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            conversation
        })
    });
    console.log(util.inspect(result.body))
    //const response: string = await result.text();
    const response: string ='Conan the Barbarian (also known as Conan the Cimmerian) is a fictional sword and sorcery hero who originated in pulp magazines and has since been adapted to books, comics, films (including Conan the Barbarian and Conan the Destroyer), television programs (animated and live-action), video games, and role-playing games.'
    +'Robert E. Howard created the character in 1932 for a series of fantasy stories published in Weird Tales magazine.    The earliest appearance of a Robert E. Howard character named Conan was that of a black-haired barbarian with heroic attributes in the 1931 short story People of the Dark. By 1932, Howard had fully conceptualized Conan. Before his death, Howard had written 21 stories starring the barbarian. Over the years many other writers have written works featuring Conan.'
    +'Many Conan the Barbarian stories feature Conan embarking on heroic adventures filled with common fantasy elements such as princesses and wizards. Howards mythopoeia has the stories set in the legendary Hyborian Age in the times after the fall of Atlantis. Conan is a Cimmerian, who are descendants of the Atlanteans and ancestors of the modern Gaels. Conan is himself a descendant of Kull of Atlantis (an earlier adventurer of Howards). He was born on a battlefield and is the son of a blacksmith. Characterized as chivalric due to his penchant to save damsels in distress. He is honorable and has a sense of enduring loyalty. Unlike Kull, Conan has a humorous nature, rejecting the brooding and frivolous philosophizing of his ancestor. He possesses great strength, combativeness, intelligence, agility, and endurance. The barbarians appearance is iconic, with square-cut black hair, blue eyes, tanned skin, and giant stature, often wearing a barbarians garb.'
    'The most popular cinematic adaptation is the 1982 Conan the Barbarian directed by John Milius and starring Arnold Schwarzenegger as Conan, in which the plot revolves around Conan facing the villainous Thulsa Doom. Licensed comics published in the 1970s by Marvel Comics drew success and included Conan in an iconic loincloth.'
    
    return response;
}