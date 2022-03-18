const projectList = [
    {name: 'Test', description: 'this is a test', link: ''},
]


export default function Projects() {
    return (
        <div>
            <table>
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
                <td><a href={projectItem.link}>{projectItem.name}</a></td>
                <td>{projectItem.description}</td>
            </tr>
        )
    } else {
        return (
            <tr key={projectItem.name}>
                <td>{projectItem.name}</td>
                <td>{projectItem.description}</td>
            </tr>
        )
    }
}