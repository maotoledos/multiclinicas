// Helpers

// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null
}

// GraphQL Query Builder
export function queryBuilder(options) {
  options.type = options.type ? options.type : 'query'
  options.operation = options.operation ? options.operation : ''
  options.fields = options.fields ? options.fields : []
  options.data = options.data ? options.data : {}
  options.variables = options.variables ? options.variables : {}

  const query = {
    query: `
            ${ options.type } ${ queryDataArgumentAndTypeMap(options.data) } {
                ${ options.operation } ${ queryDataNameAndArgumentMap(options.data) } {
                    ${ options.fields.join(',') }
                }
            }`,
    variables: Object.assign(options.data, options.variables)
  }
  return query
}

// Private - Convert object to name and argument map eg: (id: $id)
function queryDataNameAndArgumentMap(data) {
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }${ key }: $${ key }`, '') })` : ''
}

// Private - Convert object to argument and type map eg: ($id: Int)
function queryDataArgumentAndTypeMap(data) {
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }$${ key }: ${ queryDataType(data[key]) }`, '') })` : ''
}

// Private - Get GraphQL equivalent type of data passed (String, Int, Float, Boolean)
function queryDataType(data) {
  switch (typeof data) {
    case 'boolean':
      return 'Boolean'
    case 'number':
      return (data % 1 === 0) ? 'Int' : 'Float'
    case 'string':
    default:
      return 'String'
  }
}

