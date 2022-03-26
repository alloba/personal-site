import './Projects.css'

const projectList = [
    {
        name: 'Kaleidoscope',
        description: 'Random media player',
        link: '//kaleidoscope.alexlbates.com'
    },
    {
        name: 'Developer Setup',
        description:
            'A one stop shop for common workspace configurations and scripts that I would want to carry between machines. ' +
            'This includes anything like support scripts or shell configurations that are kind of annoying to set up again and again.',
        link: '//gitlab.com/alloba/developer-environment-configs'
    },
    {
        name: 'WSG Scraper',
        description: 'Download Webm files from 4chan based on thread and search-term, and automatically upload to S3.',
        link: 'TODO_SECURE_THIS_PROJECT'
    },
]


export default function Projects() {
    return (
        <div >
            <table className={'project-table-div'}>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
                {renderProjectListElements()}
            </table>
        </div>
    )
}

/**
 * Convert a list of project objects into a table row
 * Just composes single entries (refer to single element version for details)
 * @returns {*[]}
 */
function renderProjectListElements() {
    return projectList.map(entry =>
        renderSingleProjectListElement(entry)
    )
}

/**
 * Convert a project object into a table row.
 * Has conditional logic to allow hyperlinks out to the project if available.
 *
 * @param projectItem Object of structure {name: '', description: '', link: ''}. Link field is optional
 * @returns {JSX.Element}
 */
function renderSingleProjectListElement(projectItem) {
    if (projectItem.link) {
        return (
            <tr key={projectItem.name}>
                <td><a className={'list-item'} href={projectItem.link}>{projectItem.name}</a></td>
                <td>{projectItem.description}</td>
            </tr>
        )
    } else {
        return (
            <tr key={projectItem.name}>
                <td className={'list-item-noclick'}>{projectItem.name}</td>
                <td>{projectItem.description}</td>
            </tr>
        )
    }
}
