"use client";
import styles from './components/projects.module.css';
import { useRouter } from 'next/navigation'

const sampleProjects = [ //testing
  {
    id: 1,
    name: "E-commerce Platform",
    leader: { name: "Sarah Johnson", email: "sarah@company.com" },
    members: ["Mike Chen", "Emma Davis", "Alex Thompson"],
    status: "In Progress",
    deadline: "2024-03-15",
    progress: 75
  },
  {
    id: 2,
    name: "Mobile Health App",
    leader: { name: "Raj Patel", email: "raj@company.com" },
    members: ["Lisa Wong", "David Kim", "Sophia Martinez"],
    status: "Planning",
    deadline: "2025-08-01",
    creation_date: "2025-03-26",
    progress: 15
  },
  {
    id: 3,
    name: "AI Chatbot Integration",
    leader: { name: "Emily Wilson", email: "emily@company.com" },
    members: ["James Brown", "Olivia Taylor"],
    status: "On Hold",
    deadline: "2024-04-10",
    progress: 40
  }
];

export default function Projects() {
  const router = useRouter()
  return (
    <main className={styles.container}>
      <h1>Project Content (Testing)</h1>
      
      <table className={styles.projectTable}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Name</th>
            <th className={styles.headerCell}>Leader</th>
            <th className={styles.headerCell}>Members</th>
            <th className={styles.headerCell}>Status</th>
            <th className={styles.headerCell}>Creation Date</th>
            <th className={styles.headerCell}>Deadline</th>
            <th className={styles.headerCell}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {sampleProjects.map((project) => (
            <tr key={project.id} className={styles.tableRow}>
              <td className={styles.dataCell}>
                <div className={`${styles.projectButton}`}>
                  <button type="button" className={styles.projectButton} onClick={() => router.push('/projects/tasks')}>{project.name}</button>
                </div>
              </td>

              <td className={styles.dataCell}>
                <div>
                  <div> {project.leader.name}</div>
                  <div className={styles.leaderEmail}>{project.leader.email}</div>
                </div>
              </td>
              <td className={styles.dataCell}>
                <ul className={styles.memberList}>
                  {project.members.map((member, index) => (
                    <li key={index} className={styles.memberItem}>{member}</li>
                  ))}
                </ul>
              </td>
              <td className={styles.dataCell}>
                <span className={`${styles.statusBadge} ${project.status === 'In Progress' ? styles.statusInProgress : project.status === 'Planning' ? styles.statusPlanning : styles.statusOnHold}`}>
                  {project.status}
                </span>
              </td>

              <td className={styles.dataCell}>
                {new Date().toLocaleDateString()}
              </td>

              <td className={styles.dataCell}>
                
                <button type="button" className={styles.projectButton} onClick={() => router.push('/calendar')}>{new Date(project.deadline).toLocaleDateString()}</button>
                <br/>
                Days left: x 
              </td>
              <td className={styles.dataCell}>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${project.progress}%` }}></div>
                <span className={styles.progressText}>{project.progress}%</span>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}