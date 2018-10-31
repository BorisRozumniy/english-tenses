let pronouns = [
	{
		word: "He",
		isPlural: false,
		Translation: "он"
	},
	{
		word: "She",
		isPlural: false,
		Translation: "она"
	},
	{
		word: "It",
		isPlural: false,
		Translation: "это"
	},
	{
		word: "They",
		isPlural: true,
		Translation: "они"
	},
	{
		word: "We",
		isPlural: true,
		Translation: "мы"
	},
	{
		word: "You",
		isPlural: true,
		Translation: "вы"
	},
	{
		word: "I",
		isPlural: false,
		Translation: "я"
	},
]
let irregularVerbs = [
	//test word START
	/*{
		Infinitive: "traffic",
		PastSimple:	"trafficed",
		PastParticiple:"trafficed",
		Translation:	"движение"
	},
	{
		Infinitive: "lie",
		PastSimple:	"lied",
		PastParticiple:"lied",
		Translation:	"лежать"
	},*/
	// test word END
	{
		Infinitive: "be",
		PastSimple:	"was, were",
		PastParticiple:"been",
		Translation:	"быть, являться"
	},
	{
		Infinitive: "beat",
		PastSimple:	"beat",
		PastParticiple:	"beaten",
		Translation:	"бить, колотить"
	},
	{
		Infinitive: "become",
		PastSimple:	"became",
		PastParticiple:	"become",
		Translation:	"становиться"
	},
	{
		Infinitive: "begin",
		PastSimple:	"began",
		PastParticiple:	"begun",
		Translation:	"начинать"
	},
	{
		Infinitive: "bend",
		PastSimple:	"bent",
		PastParticiple:	"bent",
		Translation:	"гнуть"
	},
	{
		Infinitive: "bet",
		PastSimple:	"bet",
		PastParticiple:	"bet",
		Translation:	"держать пари"
	},
	{
		Infinitive: "bite",
		PastSimple:	"bit",
		PastParticiple:	"bitten",
		Translation:	"кусать"
	},
	{
		Infinitive: "blow",
		PastSimple:	"blew",
		PastParticiple:	"blown",
		Translation:	"дуть, выдыхать"
	},
	{
		Infinitive: "break",
		PastSimple:	"broke",
		PastParticiple:	"broken",
		Translation:	"ломать, разбивать, разрушать"
	},
	{
		Infinitive: "bring",
		PastSimple:	"brought",
		PastParticiple:	"brought",
		Translation:	"приносить, привозить, доставлять"
	},
	{
		Infinitive: "build",
		PastSimple:	"built",
		PastParticiple:	"built",
		Translation:	"строить, сооружать"
	},
	{
		Infinitive: "buy",
		PastSimple:	"bought",
		PastParticiple:	"bought",
		Translation:	"покупать, приобретать"
	},
	{
		Infinitive: "catch",
		PastSimple:	"caught",
		PastParticiple:	"caught",
		Translation:	"ловить, поймать, схватить"
	},
	{
		Infinitive: "choose",
		PastSimple:	"chose",
		PastParticiple:	"chosen",
		Translation:	"выбирать, избирать"
	},
	{
		Infinitive: "come",
		PastSimple:	"came",
		PastParticiple:	"come",
		Translation:	"приходить, подходить"
	},
	{
		Infinitive: "cost",
		PastSimple:	"cost",
		PastParticiple:	"cost",
		Translation:	"стоить, обходиться"
	},
	{
		Infinitive: "cut",
		PastSimple:	"cut",
		PastParticiple:	"cut",
		Translation:	"резать, разрезать"
	},
	{
		Infinitive: "deal",
		PastSimple:	"dealt",
		PastParticiple:	"dealt",
		Translation:	"иметь дело, распределять"
	},
	{
		Infinitive: "dig",
		PastSimple:	"dug",
		PastParticiple:	"dug",
		Translation:	"копать, рыть"
	},
	{
		Infinitive: "do",
		PastSimple:	"did",
		PastParticiple:	"done",
		Translation:	"делать, выполнять"
	},
	{
		Infinitive: "draw",
		PastSimple:	"drew",
		PastParticiple:	"drawn",
		Translation:	"рисовать, чертить"
	},
	{
		Infinitive: "drink",
		PastSimple:	"drank",
		PastParticiple:	"drunk",
		Translation:	"пить"
	},
	{
		Infinitive: "drive",
		PastSimple:	"drove",
		PastParticiple:	"driven",
		Translation:	"ездить, подвозить"
	},
	{
		Infinitive: "eat",
		PastSimple:	"ate",
		PastParticiple:	"eaten",
		Translation:	"есть, поглощать, поедать"
	},
	{
		Infinitive: "fall",
		PastSimple:	"fell",
		PastParticiple:	"fallen",
		Translation:	"падать"
	},
	{
		Infinitive: "feed",
		PastSimple:	"fed",
		PastParticiple:	"fed",
		Translation:	"кормить"
	},
	{
		Infinitive: "feel",
		PastSimple:	"felt",
		PastParticiple:	"felt",
		Translation:	"чувствовать, ощущать"
	},
	{
		Infinitive: "fight",
		PastSimple:	"fought",
		PastParticiple:	"fought",
		Translation:	"драться, сражаться, воевать"
	},
	{
		Infinitive: "find",
		PastSimple:	"found",
		PastParticiple:	"found",
		Translation:	"находить, обнаруживать"
	},
	{
		Infinitive: "fly",
		PastSimple:	"flew",
		PastParticiple:	"flown",
		Translation:	"летать"
	},
	{
		Infinitive: "forget",
		PastSimple:	"forgot",
		PastParticiple:	"forgotten",
		Translation:	"забывать о (чём-либо)"
	},
	{
		Infinitive: "forgive",
		PastSimple:	"forgave",
		PastParticiple:	"forgiven",
		Translation:	"прощать"
	},
	{
		Infinitive: "freeze",
		PastSimple:	"froze",
		PastParticiple:	"frozen",
		Translation:	"замерзать, замирать"
	},
	{
		Infinitive: "get",
		PastSimple:	"got",
		PastParticiple:	"got",
		Translation:	"получать, добираться"
	},
	{
		Infinitive: "give",
		PastSimple:	"gave",
		PastParticiple:	"given",
		Translation:	"дать, подать, дарить"
	},
	{
		Infinitive: "go",
		PastSimple:	"went",
		PastParticiple:	"gone",
		Translation:	"идти, двигаться"
	},
	{
		Infinitive: "grow",
		PastSimple:	"grew",
		PastParticiple:	"grown",
		Translation:	"расти, вырастать"
	},
	{
		Infinitive: "hang",
		PastSimple:	"hung",
		PastParticiple:	"hung",
		Translation:	"вешать, развешивать, висеть"
	},
	{
		Infinitive: "have",
		PastSimple:	"had",
		PastParticiple:	"had",
		Translation:	"иметь, обладать"
	},
	{
		Infinitive: "hear",
		PastSimple:	"heard",
		PastParticiple:	"heard",
		Translation:	"слышать, услышать"
	},
	{
		Infinitive: "hide",
		PastSimple:	"hid",
		PastParticiple:	"hidden",
		Translation:	"прятать, скрывать"
	},
	{
		Infinitive: "hit",
		PastSimple:	"hit",
		PastParticiple:	"hit",
		Translation:	"ударять, поражать"
	},
	{
		Infinitive: "hold",
		PastSimple:	"held",
		PastParticiple:	"held",
		Translation:	"держать, удерживать, задерживать"
	},
	{
		Infinitive: "hurt",
		PastSimple:	"hurt",
		PastParticiple:	"hurt",
		Translation:	"ранить, причинять боль, ушибить"
	},
	{
		Infinitive: "keep",
		PastSimple:	"kept",
		PastParticiple:	"kept",
		Translation:	"хранить, сохранять, поддерживать"
	},
	{
		Infinitive: "know",
		PastSimple:	"knew",
		PastParticiple:	"known",
		Translation:	"знать, иметь представление"
	},
	{
		Infinitive: "lay",
		PastSimple:	"laid",
		PastParticiple:	"laid",
		Translation:	"класть, положить, покрывать"
	},
	{
		Infinitive: "lead",
		PastSimple:	"led",
		PastParticiple:	"led",
		Translation:	"вести за собой, сопровождать, руководить"
	},
	{
		Infinitive: "leave",
		PastSimple:	"left",
		PastParticiple:	"left",
		Translation:	"покидать, уходить, уезжать, оставлять"
	},
	{
		Infinitive: "lend",
		PastSimple:	"lent",
		PastParticiple:	"lent",
		Translation:	"одалживать, давать взаймы (в долг)"
	},
	{
		Infinitive: "let",
		PastSimple:	"let",
		PastParticiple:	"let",
		Translation:	"позволять, разрешать"
	},
	{
		Infinitive: "lie",
		PastSimple:	"lay",
		PastParticiple:	"lain",
		Translation:	"лежать"
	},
	{
		Infinitive: "light",
		PastSimple:	"lit",
		PastParticiple:	"lit",
		Translation:	"зажигать, светиться, освещать"
	},
	{
		Infinitive: "lose",
		PastSimple:	"lost",
		PastParticiple:	"lost",
		Translation:	"терять, лишаться, утрачивать"
	},
	{
		Infinitive: "make",
		PastSimple:	"made",
		PastParticiple:	"made",
		Translation:	"делать, создавать, изготавливать"
	},
	{
		Infinitive: "mean",
		PastSimple:	"meant",
		PastParticiple:	"meant",
		Translation:	"значить, иметь в виду, подразумевать"
	},
	{
		Infinitive: "meet",
		PastSimple:	"met",
		PastParticiple:	"met",
		Translation:	"встречать, знакомиться"
	},
	{
		Infinitive: "pay",
		PastSimple:	"paid",
		PastParticiple:	"paid",
		Translation:	"платить, оплачивать, рассчитываться"
	},
	{
		Infinitive: "put",
		PastSimple:	"put",
		PastParticiple:	"put",
		Translation:	"ставить, помещать, класть"
	},
	{
		Infinitive: "read",
		PastSimple:	"read",
		PastParticiple:	"read",
		Translation:	"читать, прочитать"
	},
	{
		Infinitive: "ride",
		PastSimple:	"rode",
		PastParticiple:	"ridden",
		Translation:	"ехать верхом, кататься"
	},
	{
		Infinitive: "ring",
		PastSimple:	"rang",
		PastParticiple:	"rung",
		Translation:	"звенеть, звонить"
	},
	{
		Infinitive: "rise",
		PastSimple:	"rose",
		PastParticiple:	"risen",
		Translation:	"восходить, вставать, подниматься"
	},
	{
		Infinitive: "run",
		PastSimple:	"ran",
		PastParticiple:	"run",
		Translation:	"бежать, бегать"
	},
	{
		Infinitive: "say",
		PastSimple:	"said",
		PastParticiple:	"said",
		Translation:	"говорить, сказать, произносить"
	},
	{
		Infinitive: "see",
		PastSimple:	"saw",
		PastParticiple:	"seen",
		Translation:	"видеть"
	},
	{
		Infinitive: "seek",
		PastSimple:	"sought",
		PastParticiple:	"sought",
		Translation:	"искать, разыскивать"
	},
	{
		Infinitive: "sell",
		PastSimple:	"sold",
		PastParticiple:	"sold",
		Translation:	"продавать, торговать"
	},
	{
		Infinitive: "send",
		PastSimple:	"sent",
		PastParticiple:	"sent",
		Translation:	"посылать, отправлять, отсылать"
	},
	{
		Infinitive: "set",
		PastSimple:	"set",
		PastParticiple:	"set",
		Translation:	"устанавливать, задавать, назначать"
	},
	{
		Infinitive: "shake",
		PastSimple:	"shook",
		PastParticiple:	"shaken",
		Translation:	"трясти, встряхивать"
	},
	{
		Infinitive: "shine",
		PastSimple:	"shone",
		PastParticiple:	"shone",
		Translation:	"светить, сиять, озарять"
	},
	{
		Infinitive: "shoot",
		PastSimple:	"shot",
		PastParticiple:	"shot",
		Translation:	"стрелять"
	},
	{
		Infinitive: "show",
		PastSimple:	"showed",
		PastParticiple:	"shown, showed",
		Translation: "показывать"
	},
	{
		Infinitive: "shut",
		PastSimple:	"shut",
		PastParticiple:	"shut",
		Translation:	"закрывать, запирать, затворять"
	},
	{
		Infinitive: "sing",
		PastSimple:	"sang",
		PastParticiple:	"sung",
		Translation:	"петь, напевать"
	},
	{
		Infinitive: "sink",
		PastSimple:	"sank",
		PastParticiple:	"sunk",
		Translation:	"тонуть, погружаться"
	},
	{
		Infinitive: "sit",
		PastSimple:	"sat",
		PastParticiple:	"sat",
		Translation:	"сидеть, садиться"
	},
	{
		Infinitive: "sleep",
		PastSimple:	"slept",
		PastParticiple:	"slept",
		Translation:	"спать"
	},
	{
		Infinitive: "speak",
		PastSimple:	"spoke",
		PastParticiple:	"spoken",
		Translation:	"говорить, разговаривать, высказываться"
	},
	{
		Infinitive: "spend",
		PastSimple:	"spent",
		PastParticiple:	"spent",
		Translation:	"тратить, расходовать, проводить (время)"
	},
	{
		Infinitive: "stand",
		PastSimple:	"stood",
		PastParticiple:	"stood",
		Translation:	"стоять"
	},
	{
		Infinitive: "steal",
		PastSimple:	"stole",
		PastParticiple:	"stolen",
		Translation:	"воровать, красть"
	},
	{
		Infinitive: "stick",
		PastSimple:	"stuck",
		PastParticiple:	"stuck",
		Translation:	"втыкать, приклеивать"
	},
	{
		Infinitive: "strike",
		PastSimple:	"struck",
		PastParticiple:	"struck,  stricken",
		Translation: "ударять, бить, поражать"
	},
	{
		Infinitive: "swear",
		PastSimple:	"swore",
		PastParticiple:	"sworn",
		Translation:	"клясться, присягать"
	},
	{
		Infinitive: "sweep",
		PastSimple:	"swept",
		PastParticiple:	"swept",
		Translation:	"мести, подметать, смахивать"
	},
	{
		Infinitive: "swim",
		PastSimple:	"swam",
		PastParticiple:	"swum",
		Translation:	"плавать, плыть"
	},
	{
		Infinitive: "swing",
		PastSimple:	"swung",
		PastParticiple:	"swung",
		Translation:	"качаться, вертеться"
	},
	{
		Infinitive: "take",
		PastSimple:	"took",
		PastParticiple:	"taken",
		Translation:	"брать, хватать, взять"
	},
	{
		Infinitive: "teach",
		PastSimple:	"taught",
		PastParticiple:	"taught",
		Translation:	"учить, обучать"
	},
	{
		Infinitive: "tear",
		PastSimple:	"tore",
		PastParticiple:	"torn",
		Translation:	"рвать, отрывать"
	},
	{
		Infinitive: "tell",
		PastSimple:	"told",
		PastParticiple:	"told",
		Translation:	"рассказывать"
	},
	{
		Infinitive: "think",
		PastSimple:	"thought",
		PastParticiple:	"thought",
		Translation:	"думать, мыслить, размышлять"
	},
	{
		Infinitive: "throw",
		PastSimple:	"threw",
		PastParticiple:	"thrown",
		Translation:	"бросать, кидать, метать"
	},
	{
		Infinitive: "understand",
		PastSimple:	"understood",
		PastParticiple:	"understood",
		Translation:	"понимать, постигать"
	},
	{
		Infinitive: "wake",
		PastSimple:	"woke",
		PastParticiple:	"woken",
		Translation:	"просыпаться, будить"
	},
	{
		Infinitive: "wear",
		PastSimple:	"wore",
		PastParticiple:	"worn",
		Translation:	"носить (одежду)"
	},
	{
		Infinitive: "win",
		PastSimple:	"won",
		PastParticiple:	"won",
		Translation:	"победить, выиграть"
	},
	{
		Infinitive: "write",
		PastSimple:	"wrote",
		PastParticiple:	"written",
		Translation:	"писать, записывать"
	},
		]