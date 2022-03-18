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

function renderProjectListElements() {
    return projectList.map(entry =>
        renderSingleProjectListElement(entry)
    )
}

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