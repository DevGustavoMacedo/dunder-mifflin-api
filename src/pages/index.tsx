import DocsCard from '@/components/DocList'
import Image from 'next/image'

const Home = () => (
  <>
    <header className="grid grid-cols-2 px-4 py-2 justify-between bg-brand-700 items-center max-sm:px-2">
      <Image width={847} height={506} className="w-36 max-sm:w-28" src="https://raw.githubusercontent.com/DevGustavoMacedo/dunder-mifflin/main/public/icons/logo.webp" alt="Dunder Mifflin" />
      <h1
        className="
            font-primary 
            text-brand-100 
            font-bold
            uppercase
            tracking-wider
            text-2xl
            max-sm:text-xl"
      >
        API Documentation
      </h1>
    </header>
    <main className="my-12 mx-auto w-3/5 max-w-5xl font-secondary max-sm:w-11/12">
      <ul className="list-none">
        <DocsCard
          titleCard="Characters Routes"
          urlTitle="Base path"
          url="https://dunder-mifflin-api.vercel.app/api/characters"
          paramsTitle="Optional params: "
          params="name | image | portrayed | brand | staff | firstEp | trivia | seasons | nicknames | quotes"
        />
        <DocsCard titleCard="All Characters" url="/all?name" paramsTitle=" " params=" " />
        <DocsCard titleCard="One Character" url="/one?find=MichaelScott&name&nicknames" />
        <DocsCard titleCard="characters per season" url="/season?find=7&name&quotes" />
        <DocsCard titleCard="characters per brand" url="/brand?find=Scranton&name&seasons" />
        <DocsCard titleCard="characters per staff" url="/staff?find=sales&name&trivia" />
      </ul>
      <ul className="list-none">
        <DocsCard
          titleCard="Podcast Routes"
          urlTitle="Base path"
          url="https://dunder-mifflin-api.vercel.app/api/podcast"
          paramsTitle="Optional params: "
          params="title | episode | link"
        />
        <DocsCard titleCard="All episodes" url="/all?title" paramsTitle=" " params=" " />
        <DocsCard titleCard="One episode" url="/one?find=7x21&title&link" />
      </ul>
    </main>
    <footer className="bg-brand-700 text-brand-100 py-4 mt-16 font-secondary flex justify-center font-bold">
      Developed by<a href="https://github.com/DevGustavoMacedo" target='_blank' className='text-brand-400 ml-1'>@GustavoMacedo</a>
    </footer>
  </>
)

export default Home
