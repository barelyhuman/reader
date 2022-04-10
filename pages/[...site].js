import {useEffect, useState} from 'react'
import {urlToHTML} from '~/lib/server/html'
import {sanitizer} from '~/lib/client/sanitizer'

export default function Home({html}) {
	const [sanitizedHTMl, setSanitizedHTML] = useState()

	useEffect(() => {
		sanitizer(html).then(x => setSanitizedHTML(x))
	}, [html])

	return (
		<>
			<section
				className="wrapper"
				dangerouslySetInnerHTML={{__html: sanitizedHTMl}}
			></section>
		</>
	)
}

export async function getServerSideProps(ctx) {
	const result = {
		props: {},
	}

	if (ctx.params && ctx.params.site.length) {
		const fullPath = 'http://' + ctx.params.site.join('/')
		result.props.html = await urlToHTML(fullPath)
	}

	return result
}
