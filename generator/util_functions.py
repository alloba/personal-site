import os


def load_file(filepath):
    with open(filepath, mode='r') as f:
        return f.read()


def save_file(filepath, filecontent):
    with open(filepath, 'w') as f:
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        f.write(filecontent)


def tree_walk(directory):
    files_out = []
    for path, currentDirectory, files in os.walk(directory):
        for file in files:
            files_out.append(os.path.join(path, file))
    return files_out


def sanitize_path(path):
    return os.path.abspath(os.path.expanduser(path))
