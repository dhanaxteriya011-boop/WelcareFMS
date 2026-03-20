import styles from './ClientsStrip.module.css'

// Sectors / client types Welcare serves
const SECTORS = [
  { ico:'🏨', name:'5-Star Hotels'          },
  { ico:'🏢', name:'IT Parks'               },
  { ico:'🏭', name:'Industrial Units'       },
  { ico:'🏘️', name:'Residential Societies' },
  { ico:'🏫', name:'Schools & Colleges'     },
  { ico:'🏥', name:'Hospitals'              },
  { ico:'🏬', name:'Shopping Malls'         },
  { ico:'🏗️', name:'Construction Sites'    },
  { ico:'🏛️', name:'Government Offices'    },
  { ico:'🚀', name:'Startups & SMEs'        },
]

export default function ClientsStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.label}>We Serve</div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {[...SECTORS, ...SECTORS].map((s, i) => (
            <div key={i} className={styles.chip}>
              <span className={styles.chipIco}>{s.ico}</span>
              <span className={styles.chipName}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
