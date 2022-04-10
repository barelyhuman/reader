import got from 'got'

export async function urlToHTML(path) {
	const html = await got(path).text()
	return html
}
