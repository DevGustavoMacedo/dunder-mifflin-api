type Props = {
  titleCard: string
  urlTitle?: string
  url: string
  paramsTitle?: string
  params?: string
}

const DocsCard = ({ titleCard, urlTitle, url, paramsTitle, params }: Props) => (
  <li
    key={titleCard}
    className="w-fill bg-brand-400 mb-8 p-4 rounded-3xl
  [&:nth-child(1n+2)]:w-3/4"
  >
    <h2 className="font-primary text-brand-700 tracking-wider text-xl mb-4 uppercase">
      {titleCard}
    </h2>
    <b>{urlTitle || 'Path'}</b>
    <pre className="my-2 rounded-3xl bg-brand-700 p-4 w-fit max-w-full overflow-x-auto">
      <code className="text-brand-100 text-sm max-sm:text-xs">
        {url.split('?')[0]}
        {url.split('?')[1] && <span className=" text-brand-400">?{url.split('?')[1]}</span>}
      </code>
    </pre>
    <p className="my-2">
      <b>{paramsTitle || 'Required: '}</b>
      {params || 'find'}
    </p>
  </li>
)

export default DocsCard
