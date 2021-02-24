import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  return (
    <header className= {styles.experienceBar}>
      <span>0 xp</span>
        <div>
          {/* Esse style inline,é pq vai mudar, no css são coisas fixas */}
          <div style={{ width: '50%'}}/>
          <span className= {styles.currentExperience} style= {{ left: '50%'}}>300 xp</span>
        </div>
      <span>600 xp</span>
    </header>
  )
}
