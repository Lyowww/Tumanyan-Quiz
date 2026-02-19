import { Question } from "@/types";

/** Character IDs for trait weights: gikor, panos, ter, chara, kikos, nazar, huri, anush, maro */
type CharTraits = Record<string, number>;

function t(weights: CharTraits): CharTraits {
  return weights;
}

/**
 * 14 high-quality personality questions in Armenian.
 * Reveal: bravery, naivety, kindness, laziness, cunning, responsibility.
 * Multiple choice, modern natural Armenian.
 */
export const questions: Question[] = [
  {
    id: "q1",
    text: "Դժվար իրավիճակում դու ավելի հաճախ…",
    options: [
      { id: "q1_a1", text: "Փորձում ես գտնել խելացի կամ խորամանկ ելք", traits: t({ gikor: 0.3, panos: 0.4, ter: 0.6, chara: 0.95, kikos: 0.4, nazar: 0.9, huri: 0.3, anush: 0.5, maro: 0.5 }) },
      { id: "q1_a2", text: "Վստահում ես զգացմունքներիդ և սրտիդ", traits: t({ gikor: 0.95, panos: 0.7, ter: 0.3, chara: 0.4, kikos: 0.8, nazar: 0.4, huri: 0.6, anush: 0.95, maro: 0.9 }) },
      { id: "q1_a3", text: "Փորձում ես խուսափել կոնֆլիկտից և հաշտ ապրել", traits: t({ gikor: 0.6, panos: 0.8, ter: 0.4, chara: 0.5, kikos: 0.9, nazar: 0.5, huri: 0.8, anush: 0.7, maro: 0.6 }) },
      { id: "q1_a4", text: "Վերցնում ես պատասխանատվությունը և որոշում կայացնում", traits: t({ gikor: 0.8, panos: 0.5, ter: 0.95, chara: 0.6, kikos: 0.5, nazar: 0.7, huri: 0.2, anush: 0.8, maro: 0.7 }) },
    ],
  },
  {
    id: "q2",
    text: "Ընկերները քեզ ամենից շատ կնկարագրեն որպես…",
    options: [
      { id: "q2_a1", text: "Հավատարիմ և պատրաստ ամեն ինչի ընտանիքի ու մտերիմների համար", traits: t({ gikor: 0.95, panos: 0.7, ter: 0.6, chara: 0.5, kikos: 0.8, nazar: 0.5, huri: 0.6, anush: 0.95, maro: 0.85 }) },
      { id: "q2_a2", text: "Խելացի և հնարամիտ, միշտ ելք գտնող", traits: t({ gikor: 0.5, panos: 0.5, ter: 0.7, chara: 0.95, kikos: 0.4, nazar: 0.95, huri: 0.4, anush: 0.5, maro: 0.6 }) },
      { id: "q2_a3", text: "Կենսուրախ և զվարճալի, նույնիսկ դժվար ժամանակ", traits: t({ gikor: 0.6, panos: 0.95, ter: 0.5, chara: 0.6, kikos: 0.95, nazar: 0.9, huri: 0.85, anush: 0.6, maro: 0.5 }) },
      { id: "q2_a4", text: "Ազատ և անկախ, իր ճանապարհով գնացող", traits: t({ gikor: 0.4, panos: 0.4, ter: 0.8, chara: 0.7, kikos: 0.5, nazar: 0.8, huri: 0.6, anush: 0.4, maro: 0.9 }) },
    ],
  },
  {
    id: "q3",
    text: "Երբ ինչ-որ մեկը քեզ անարդար վերաբերվի, դու…",
    options: [
      { id: "q3_a1", text: "Փորձում ես հասկանալ և ներել, չես ուզում թշնամանք", traits: t({ gikor: 0.8, panos: 0.8, ter: 0.4, chara: 0.4, kikos: 0.95, nazar: 0.4, huri: 0.7, anush: 0.9, maro: 0.7 }) },
      { id: "q3_a2", text: "Պաշտպանում ես քեզ, բայց խելացի, առանց կոնֆլիկտի", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.7, chara: 0.95, kikos: 0.5, nazar: 0.9, huri: 0.4, anush: 0.6, maro: 0.8 }) },
      { id: "q3_a3", text: "Շատ ես վիրավորվում, բայց փորձում ես ցույց չտալ", traits: t({ gikor: 0.9, panos: 0.6, ter: 0.3, chara: 0.3, kikos: 0.7, nazar: 0.3, huri: 0.5, anush: 0.9, maro: 0.9 }) },
      { id: "q3_a4", text: "Չես մտածում երկար, անցնում ես կյանքին", traits: t({ gikor: 0.4, panos: 0.9, ter: 0.6, chara: 0.6, kikos: 0.8, nazar: 0.7, huri: 0.85, anush: 0.4, maro: 0.5 }) },
    ],
  },
  {
    id: "q4",
    text: "Քո իդեալական հանգստի օրը ավելի շատ նման է…",
    options: [
      { id: "q4_a1", text: "Ընտանիքի կամ մտերիմների հետ անցկացված ժամանակ", traits: t({ gikor: 0.95, panos: 0.7, ter: 0.6, chara: 0.4, kikos: 0.8, nazar: 0.4, huri: 0.6, anush: 0.95, maro: 0.7 }) },
      { id: "q4_a2", text: "Մենակ ժամանակ՝ բնության կամ մտքերիդ հետ", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.5, chara: 0.6, kikos: 0.5, nazar: 0.6, huri: 0.5, anush: 0.6, maro: 0.95 }) },
      { id: "q4_a3", text: "Ընկերների հետ զվարճալի, ծիծաղով լի օր", traits: t({ gikor: 0.5, panos: 0.95, ter: 0.5, chara: 0.6, kikos: 0.95, nazar: 0.9, huri: 0.9, anush: 0.5, maro: 0.5 }) },
      { id: "q4_a4", text: "Օգտակար գործով զբաղվել, որ արդյունք տա", traits: t({ gikor: 0.7, panos: 0.4, ter: 0.9, chara: 0.8, kikos: 0.6, nazar: 0.7, huri: 0.2, anush: 0.7, maro: 0.6 }) },
    ],
  },
  {
    id: "q5",
    text: "Երբ պետք է կատարես մի ժամանակատար կամ անսիրտ աշխատանք, դու…",
    options: [
      { id: "q5_a1", text: "Շուտ ես սկսում և ավարտում, պատասխանատու ես", traits: t({ gikor: 0.9, panos: 0.5, ter: 0.95, chara: 0.85, kikos: 0.7, nazar: 0.8, huri: 0.2, anush: 0.85, maro: 0.8 }) },
      { id: "q5_a2", text: "Հետաձգում ես, մինչև վերջին պահ, բայց հետո ամեն ինչ անում", traits: t({ gikor: 0.5, panos: 0.6, ter: 0.5, chara: 0.7, kikos: 0.6, nazar: 0.7, huri: 0.9, anush: 0.5, maro: 0.5 }) },
      { id: "q5_a3", text: "Փորձում ես գտնել հեշտ կամ խելացի ճանապարհ", traits: t({ gikor: 0.5, panos: 0.6, ter: 0.7, chara: 0.95, kikos: 0.5, nazar: 0.95, huri: 0.85, anush: 0.5, maro: 0.6 }) },
      { id: "q5_a4", text: "Չես սիրում այդպիսի աշխատանք, նախընտրում ես ուրիշ բան", traits: t({ gikor: 0.3, panos: 0.5, ter: 0.3, chara: 0.4, kikos: 0.6, nazar: 0.5, huri: 0.95, anush: 0.4, maro: 0.6 }) },
    ],
  },
  {
    id: "q6",
    text: "Կյանքի անսպասելի փոփոխությունների նկատմամբ դու…",
    options: [
      { id: "q6_a1", text: "Հեշտությամբ հարմարվում ես, նույնիսկ եթե դժվար է", traits: t({ gikor: 0.6, panos: 0.9, ter: 0.7, chara: 0.95, kikos: 0.8, nazar: 0.95, huri: 0.6, anush: 0.7, maro: 0.85 }) },
      { id: "q6_a2", text: "Նախընտրում ես կայունություն և կանխատեսելիություն", traits: t({ gikor: 0.9, panos: 0.5, ter: 0.8, chara: 0.5, kikos: 0.7, nazar: 0.4, huri: 0.6, anush: 0.85, maro: 0.6 }) },
      { id: "q6_a3", text: "Վախենում ես փոփոխությունից, բայց փորձում ես հաղթահարել", traits: t({ gikor: 0.8, panos: 0.6, ter: 0.5, chara: 0.4, kikos: 0.8, nazar: 0.4, huri: 0.5, anush: 0.9, maro: 0.8 }) },
      { id: "q6_a4", text: "Սիրում ես նորությունը, եթե դա քո ընտրությունն է", traits: t({ gikor: 0.4, panos: 0.7, ter: 0.7, chara: 0.7, kikos: 0.6, nazar: 0.9, huri: 0.6, anush: 0.5, maro: 0.9 }) },
    ],
  },
  {
    id: "q7",
    text: "Երբ ինչ-որ մեկին օգնություն է պետք, դու…",
    options: [
      { id: "q7_a1", text: "Անմիջապես օգնում ես, առանց երկար մտածելու", traits: t({ gikor: 0.95, panos: 0.9, ter: 0.6, chara: 0.5, kikos: 0.95, nazar: 0.5, huri: 0.7, anush: 0.95, maro: 0.85 }) },
      { id: "q7_a2", text: "Փորձում ես օգնել խելացի, առանց քեզ վնասելու", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.8, chara: 0.95, kikos: 0.5, nazar: 0.9, huri: 0.5, anush: 0.6, maro: 0.6 }) },
      { id: "q7_a3", text: "Օգնում ես, եթե սիրտդ ասում է, նույնիսկ զոհաբերությամբ", traits: t({ gikor: 0.9, panos: 0.7, ter: 0.4, chara: 0.4, kikos: 0.8, nazar: 0.4, huri: 0.6, anush: 0.95, maro: 0.9 }) },
      { id: "q7_a4", text: "Օգնում ես, բայց նախընտրում ես չխառնվել ավելի, քան պետք է", traits: t({ gikor: 0.4, panos: 0.5, ter: 0.7, chara: 0.7, kikos: 0.5, nazar: 0.7, huri: 0.6, anush: 0.4, maro: 0.6 }) },
    ],
  },
  {
    id: "q8",
    text: "Կյանքում ամենակարևորը քեզ համար…",
    options: [
      { id: "q8_a1", text: "Սերը, ընտանիքը և մտերիմ մարդիկ", traits: t({ gikor: 0.95, panos: 0.7, ter: 0.6, chara: 0.5, kikos: 0.8, nazar: 0.4, huri: 0.6, anush: 0.95, maro: 0.85 }) },
      { id: "q8_a2", text: "Ազատությունը, արժանապատվությունը և անկախությունը", traits: t({ gikor: 0.5, panos: 0.5, ter: 0.8, chara: 0.7, kikos: 0.5, nazar: 0.85, huri: 0.6, anush: 0.6, maro: 0.95 }) },
      { id: "q8_a3", text: "Բարությունը, արդարությունը և մարդկայնությունը", traits: t({ gikor: 0.85, panos: 0.9, ter: 0.5, chara: 0.5, kikos: 0.95, nazar: 0.6, huri: 0.8, anush: 0.9, maro: 0.8 }) },
      { id: "q8_a4", text: "Խելքը, հնարամտությունը և հաջողությունը", traits: t({ gikor: 0.5, panos: 0.5, ter: 0.85, chara: 0.95, kikos: 0.5, nazar: 0.95, huri: 0.4, anush: 0.5, maro: 0.5 }) },
    ],
  },
  {
    id: "q9",
    text: "Երբ ինչ-որ բան չի ստացվում, դու…",
    options: [
      { id: "q9_a1", text: "Շարունակում ես փորձել, չես հանձնվում", traits: t({ gikor: 0.95, panos: 0.8, ter: 0.9, chara: 0.8, kikos: 0.7, nazar: 0.9, huri: 0.3, anush: 0.9, maro: 0.85 }) },
      { id: "q9_a2", text: "Փորձում ես այլ, ավելի խելացի մոտեցում", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.7, chara: 0.95, kikos: 0.6, nazar: 0.95, huri: 0.5, anush: 0.6, maro: 0.7 }) },
      { id: "q9_a3", text: "Վստահում ես, որ ամեն ինչ ինքն իրեն կլուծվի", traits: t({ gikor: 0.4, panos: 0.8, ter: 0.3, chara: 0.4, kikos: 0.9, nazar: 0.5, huri: 0.9, anush: 0.5, maro: 0.5 }) },
      { id: "q9_a4", text: "Վրդովվում ես, բայց շուտով հանգստանում և շարունակում", traits: t({ gikor: 0.8, panos: 0.85, ter: 0.6, chara: 0.6, kikos: 0.7, nazar: 0.7, huri: 0.6, anush: 0.8, maro: 0.7 }) },
    ],
  },
  {
    id: "q10",
    text: "Երբ ինչ-որ մեկը քեզ խաբում է, դու…",
    options: [
      { id: "q10_a1", text: "Շատ ես վիրավորվում, բայց փորձում ես ներել", traits: t({ gikor: 0.9, panos: 0.7, ter: 0.4, chara: 0.3, kikos: 0.9, nazar: 0.3, huri: 0.6, anush: 0.95, maro: 0.85 }) },
      { id: "q10_a2", text: "Փորձում ես հասկանալ պատճառը և խելացի արձագանքել", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.7, chara: 0.95, kikos: 0.5, nazar: 0.9, huri: 0.4, anush: 0.6, maro: 0.7 }) },
      { id: "q10_a3", text: "Հեռանում ես, պահպանում ես արժանապատվությունդ", traits: t({ gikor: 0.7, panos: 0.6, ter: 0.8, chara: 0.7, kikos: 0.6, nazar: 0.7, huri: 0.5, anush: 0.85, maro: 0.9 }) },
      { id: "q10_a4", text: "Չես մտածում երկար, շարունակում ես կյանքդ", traits: t({ gikor: 0.4, panos: 0.9, ter: 0.5, chara: 0.5, kikos: 0.8, nazar: 0.6, huri: 0.8, anush: 0.4, maro: 0.5 }) },
    ],
  },
  {
    id: "q11",
    text: "Քո կարծիքով, ավելի կարևոր է…",
    options: [
      { id: "q11_a1", text: "Անկեղծությունը և հավատարմությունը", traits: t({ gikor: 0.95, panos: 0.85, ter: 0.6, chara: 0.5, kikos: 0.9, nazar: 0.5, huri: 0.7, anush: 0.95, maro: 0.85 }) },
      { id: "q11_a2", text: "Խելքը և հնարամտությունը", traits: t({ gikor: 0.5, panos: 0.5, ter: 0.8, chara: 0.95, kikos: 0.5, nazar: 0.95, huri: 0.4, anush: 0.5, maro: 0.6 }) },
      { id: "q11_a3", text: "Բարությունը և մարդկայնությունը", traits: t({ gikor: 0.85, panos: 0.9, ter: 0.5, chara: 0.5, kikos: 0.95, nazar: 0.6, huri: 0.85, anush: 0.9, maro: 0.8 }) },
      { id: "q11_a4", text: "Ազատությունը և ինքնուրույնությունը", traits: t({ gikor: 0.4, panos: 0.5, ter: 0.85, chara: 0.7, kikos: 0.5, nazar: 0.85, huri: 0.6, anush: 0.5, maro: 0.9 }) },
    ],
  },
  {
    id: "q12",
    text: "Ստեղծագործական կամ բարդ խնդիր առաջանալիս դու…",
    options: [
      { id: "q12_a1", text: "Փորձում ես գտնել ստեղծագործական, անսովոր լուծում", traits: t({ gikor: 0.5, panos: 0.6, ter: 0.6, chara: 0.95, kikos: 0.5, nazar: 0.95, huri: 0.5, anush: 0.6, maro: 0.7 }) },
      { id: "q12_a2", text: "Հարցնում ես մտերիմներիդ կամ վստահում նրանց", traits: t({ gikor: 0.9, panos: 0.7, ter: 0.5, chara: 0.4, kikos: 0.85, nazar: 0.4, huri: 0.6, anush: 0.9, maro: 0.8 }) },
      { id: "q12_a3", text: "Վերցնում ես պատասխանատվությունը և որոշում կայացնում", traits: t({ gikor: 0.85, panos: 0.5, ter: 0.95, chara: 0.8, kikos: 0.6, nazar: 0.8, huri: 0.2, anush: 0.8, maro: 0.75 }) },
      { id: "q12_a4", text: "Հանգստանում ես, մտածում, ապա գործում", traits: t({ gikor: 0.7, panos: 0.6, ter: 0.7, chara: 0.7, kikos: 0.7, nazar: 0.7, huri: 0.5, anush: 0.7, maro: 0.85 }) },
    ],
  },
  {
    id: "q13",
    text: "Իրավիճակ, երբ պետք է ռիսկի դիմել, քեզ…",
    options: [
      { id: "q13_a1", text: "Սարսափեցնում է, նախընտրում ես ապահով ճանապարհ", traits: t({ gikor: 0.6, panos: 0.5, ter: 0.4, chara: 0.4, kikos: 0.8, nazar: 0.3, huri: 0.7, anush: 0.7, maro: 0.5 }) },
      { id: "q13_a2", text: "Ոգեշնչում է, եթե նպատակը արժե այդ", traits: t({ gikor: 0.6, panos: 0.7, ter: 0.8, chara: 0.8, kikos: 0.5, nazar: 0.95, huri: 0.4, anush: 0.7, maro: 0.8 }) },
      { id: "q13_a3", text: "Չեզոք է, կախված է իրավիճակից", traits: t({ gikor: 0.7, panos: 0.7, ter: 0.7, chara: 0.85, kikos: 0.7, nazar: 0.8, huri: 0.6, anush: 0.6, maro: 0.7 }) },
      { id: "q13_a4", text: "Սովորաբար խուսափում ես ռիսկից", traits: t({ gikor: 0.7, panos: 0.6, ter: 0.5, chara: 0.5, kikos: 0.8, nazar: 0.4, huri: 0.8, anush: 0.8, maro: 0.6 }) },
    ],
  },
  {
    id: "q14",
    text: "Ինչն է ավելի դժվար քեզ համար…",
    options: [
      { id: "q14_a1", text: "Արտահայտել խոր զգացմունքներդ ուղղակի", traits: t({ gikor: 0.9, panos: 0.5, ter: 0.6, chara: 0.5, kikos: 0.6, nazar: 0.5, huri: 0.5, anush: 0.4, maro: 0.7 }) },
      { id: "q14_a2", text: "Հրաժարվել վերահսկողությունից կամ անկախությունից", traits: t({ gikor: 0.5, panos: 0.5, ter: 0.9, chara: 0.7, kikos: 0.5, nazar: 0.85, huri: 0.5, anush: 0.6, maro: 0.9 }) },
      { id: "q14_a3", text: "Հրաժարվել սիրելի մարդուց կամ երազանքից", traits: t({ gikor: 0.9, panos: 0.6, ter: 0.5, chara: 0.4, kikos: 0.7, nazar: 0.4, huri: 0.5, anush: 0.95, maro: 0.9 }) },
      { id: "q14_a4", text: "Սկսել մի բան, երբ չես ուզում", traits: t({ gikor: 0.4, panos: 0.6, ter: 0.5, chara: 0.5, kikos: 0.6, nazar: 0.5, huri: 0.95, anush: 0.5, maro: 0.5 }) },
    ],
  },
];
