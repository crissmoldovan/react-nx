const properties = require('known-css-properties').all
const { camelCaseProperty } = require('css-in-js-utils')
const fs = require('fs')

const attributesMappingPath = 'src/lib/style/mapping.json'

const generateMappingsFile = () => {
  const mapping = {}

  properties.forEach(property => {
    const rawFunctionName = camelCaseProperty(property)
    const functionName = rawFunctionName[0].toLowerCase() + rawFunctionName.substr(1)
    mapping[functionName] = rawFunctionName
  })

  fs.writeFileSync(attributesMappingPath, JSON.stringify(mapping))
}

generateMappingsFile()
