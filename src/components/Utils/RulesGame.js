export const createRulesCatching = () => {
  const pRules = document.createElement('p')
  pRules.className = 'rulesCatching'
  pRules.innerText =
    'Las pelotas recogidas van sumando puntos, pero si llegan al suelo, pierdes una vida. Por cada gato que cojas ... ¡perderás puntos!'
  return pRules
}

export const createRulesPuzzle = () => {
  const pRules = document.createElement('p')
  pRules.className = 'rulesPuzzle'
  pRules.innerText = '¡Se el más rápido en acabar el puzzle!'
  return pRules
}
