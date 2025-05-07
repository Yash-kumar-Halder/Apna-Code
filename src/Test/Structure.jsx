import React from 'react';

const data = {
    files: [
        {
            _id: '681ad9e31eae76a43be10508',
            name: 'DataStructure',
            type: 'folder',
            parentId: null,
            userId: '6818beb68ddcec253267275c',
            __v: 0,
        },
        {
            _id: '681adc597043138c6ac8d6ae',
            name: 'DataStructure',
            type: 'folder',
            parentId: {
                _id: '681ad9e31eae76a43be10508',
            },
            userId: '6818beb68ddcec253267275c',
            __v: 0,
        },
        {
            _id: '681adceb4e31b4ef42183cf9',
            name: 'Algo',
            type: 'folder',
            parentId: {
                _id: '681adc597043138c6ac8d6ae',
            },
            userId: '6818beb68ddcec253267275c',
            __v: 0,
        },
        {
            _id: '681add3b4e31b4ef42183cff',
            name: 'Quick Sort',
            type: 'file',
            parentId: {
                _id: '681adceb4e31b4ef42183cf9',
            },
            userId: '6818beb68ddcec253267275c',
            __v: 0,
            content: {
                title: 'Quick Sort Algorithm',
                notes: 'Divide and conquer sorting algorithm.',
                links: ['https://example.com/quicksort'],
                tags: ['sort', 'algorithm', 'DSA'],
                code: [
                    'function quickSort(arr) { /* ... */ }',
                    'def quick_sort(arr): pass',
                ],
            },
        },
        {
            _id: '681add5c4e31b4ef42183d05',
            name: 'Tree',
            type: 'file',
            parentId: {
                _id: '681adc597043138c6ac8d6ae',
            },
            userId: '6818beb68ddcec253267275c',
            __v: 0,
            content: {
                title: 'Tree Data Structure',
                notes: 'Used to represent hierarchical data.',
                links: ['https://example.com/tree'],
                tags: ['tree', 'hierarchy'],
                code: [
                    'class TreeNode { TreeNode left, right; }',
                ],
            },
        },
    ],
};

// Transform flat list into a tree
const buildFolderStructure = (files) => {
    const map = {};
    const roots = [];

    files.forEach((file) => {
        map[file._id] = { ...file, children: [] };
    });

    files.forEach((file) => {
        const parentId = file.parentId?._id;
        if (parentId && map[parentId]) {
            map[parentId].children.push(map[file._id]);
        } else {
            roots.push(map[file._id]);
        }
    });

    return roots;
};

// Recursive rendering component
const ListItems = ({ list }) => {
    return (
        <div className="folder-structure">
            {list.map((node) => (
                <div key={node._id} className={`node ${node.type}`}>
                    <div className="node-header">
                        📁 {node.name}
                    </div>

                    {node.type === 'file' && node.content && (
                        <div className="file-content">
                            <h3>{node.content.title}</h3>
                            <p>{node.content.notes}</p>

                            <div className="links">
                                <strong>Links:</strong>
                                {node.content.links.map((link, i) => (
                                    <div key={i}>
                                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="tags">
                                <strong>Tags:</strong>
                                {node.content.tags.map((tag, i) => (
                                    <span key={i} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="code-blocks">
                                <strong>Code:</strong>
                                {node.content.code.map((snippet, i) => (
                                    <pre key={i}>
                                        <code>{snippet}</code>
                                    </pre>
                                ))}
                            </div>
                        </div>
                    )}

                    {node.children && node.children.length > 0 && (
                        <div className="node-children">
                            <ListItems list={node.children} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const Structure = () => {
    const folderStructure = buildFolderStructure(data.files);

    return (
        <div className="structure-container">
            <h2>📂 Folder Structure</h2>
            <ListItems list={folderStructure} />
        </div>
    );
};

export default Structure;
