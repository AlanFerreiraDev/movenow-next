import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

export default function Home() {
  return (
    <div className= "container">
      <ExperienceBar />

      <section>
        {/* Uma div para cada lado */}
        <div >
          <Profile />

        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
