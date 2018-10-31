let inputForm, pronounsHTML, verbsHTML, sentence, sentences

inputForm = document.querySelector('.inputForm')
pronounsHTML = document.querySelector('#pronounsHTML')
verbsHTML = document.querySelector('#verbsHTML')
sentence = {
	pronoun : pronouns[0],
	verb : irregularVerbs[0],
	string : function() {
		return `(${this.pronoun.Translation}) (${this.verb.Translation})`
	},
	update: function(str, arr) {
		arr.forEach((el, i) => {
			if (el.word === str) this.pronoun = el
			if (el.Infinitive === str) this.verb = el
		})
	}
}

const fillSelect = (arr, parentHTML) => {
	arr.forEach(el => {
		let option = document.createElement('option')
		option.value = (el.Infinitive) ? el.Infinitive : el.word
		option.innerHTML = (el.Infinitive) ? el.Infinitive : el.word
		parentHTML.appendChild(option)
	})
}
fillSelect(pronouns ,pronounsHTML)
fillSelect(irregularVerbs ,verbsHTML)

// Проверяем число существительного
let numberOfNoun = () => {
	return (this.isPlural) ? "were" : "was"
}

let generetedSentence = () => {
	const {
		pronoun: {
			word: cP,
			isPlural
		},
		verb: {
			Infinitive, 
			PastSimple,
			PastParticiple
		}
	} = sentence

	sufixING = () => {
		let copy = Infinitive;
			let arr = Infinitive.split('')
		// Непроизносимая «е»
		if (Infinitive[Infinitive["length"]-1] === 'e') {
			arr.splice(-1, 1, 'ing')
			copy = arr.join('')
			if (Infinitive[Infinitive["length"]-2] === 'e')
				copy = `${Infinitive}ing`
		} else {
			copy = `${Infinitive}ing`
		}

		// Окончание -iе меняется на -у
		if (Infinitive.split('').splice(-2, 2).join('') === 'ie') {
			arr.splice(-2, 2, 'ying')
			copy = arr.join('')
		}

		//Удвоение согласных ???

		// Окончание -ic
		if (Infinitive.split('').splice(-2, 2).join('') === 'ic') {
			arr.push('king')
			copy = arr.join('')
		}

		return copy
	}

	toBe = () => {
		if (isPlural) {
			return 'are'
		} else {
			if (cP === 'I')
				return 'am'
			else
				return 'is'
		}
	}

	was = () => isPlural ? 'were' : 'was'

	have = () => !isPlural ? cP === 'I' ? 'have' : 'has' : 'have'

	sentences = [
		// simple
		`Will ${cP} ${Infinitive}?`,
		`${cP} will ${Infinitive}.`,
		`${cP} will not ${Infinitive}.`,
		`${ (isPlural || cP === 'I') ? 'Do' : 'Does'} ${cP} ${Infinitive}?`,
		`${cP} ${(!isPlural) ? cP ==="I" ? Infinitive : `${Infinitive}s` : Infinitive}.`,
		`${cP} ${(isPlural || cP === 'I') ? 'do' : 'does'} not ${Infinitive}.`,
		`Did ${cP} ${Infinitive}?`,
		`${cP} ${PastSimple}.`,
		`${cP} did not ${Infinitive}.`,
		// continuous
		`Will be ${cP} ${sufixING()}?`,
		`${cP} will be ${sufixING()}.`,
		`${cP} will be not ${sufixING()}.`,
		`${toBe()} ${cP} ${sufixING()}?`,
		`${cP} ${toBe()} ${sufixING()}.`,
		`${cP} ${toBe()} not ${sufixING()}`,
		`${was()} ${cP} ${sufixING()}?`,
		`${cP} ${was()} ${sufixING()}.`,
		`${cP} ${was()} not ${sufixING()}.`,
		// perfect
		`Will have ${cP} ${PastParticiple}?`,
		`${cP} will have ${PastParticiple}.`,
		`${cP} will have not ${PastParticiple}.`,
		`${have()} ${cP} ${PastParticiple}?`,
		`${cP} ${have()} ${PastParticiple}.`,
		`${cP} ${have()} not ${PastParticiple}.`,
		`Had ${cP} ${PastParticiple}?`,
		`${cP} had ${PastParticiple}.`,
		`${cP} had not ${PastParticiple}.`,
		// perfect continuous
		`Will have ${cP}  been ${sufixING()}?`,
		`${cP} will have been ${sufixING()}.`,
		`${cP} will have not been ${sufixING()}.`,
		`${have()} ${cP}  been ${sufixING()}?`,
		`${cP} ${have()} been ${sufixING()}.`,
		`${cP} ${have()} not been ${sufixING()}.`,
		`hed ${cP}  been ${sufixING()}?`,
		`${cP} hed been ${sufixING()}.`,
		`${cP} hed not been ${sufixING()}.`,
	]

}

let show = () => {
	document.querySelector('#inRussian').innerHTML = sentence.string()
	
	for (let i = 0; i<sentences.length; i++) {
		let td = document.querySelectorAll('.for-tense')
		td[i].textContent = sentences[i]
	}
}

inputForm.addEventListener("change", generetedSentence)
pronounsHTML.addEventListener("change", ()=>{sentence.update(pronounsHTML.value, pronouns)})
verbsHTML.addEventListener("change", ()=>{sentence.update(verbsHTML.value, irregularVerbs)})
inputForm.addEventListener("change", show)