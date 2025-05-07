data = {
    files: [
        {
            _id: "681ad9e31eae76a43be10508",
            name: "DataStructure",
            type: "folder",
            parentId: null,
            userId: "6818beb68ddcec253267275c",
            __v: 0,
        },
        {
            _id: "681adc597043138c6ac8d6ae",
            name: "DataStructure",
            type: "folder",
            parentId: {
                _id: "681ad9e31eae76a43be10508",
            },
            userId: "6818beb68ddcec253267275c",
            __v: 0,
        },
        {
            _id: "681adceb4e31b4ef42183cf9",
            name: "Algo",
            type: "folder",
            parentId: {
                _id: "681adc597043138c6ac8d6ae",
            },
            userId: "6818beb68ddcec253267275c",
            __v: 0,
        },
        {
            _id: "681add3b4e31b4ef42183cff",
            name: "Quick Sort",
            type: "file",
            parentId: {
                _id: "681adceb4e31b4ef42183cf9",
            },
            userId: "6818beb68ddcec253267275c",
            __v: 0,
        },
        {
            _id: "681add5c4e31b4ef42183d05",
            name: "Tree",
            type: "file",
            parentId: {
                _id: "681adc597043138c6ac8d6ae",
            },
            userId: "6818beb68ddcec253267275c",
            __v: 0,
        },
    ],
};


const buildFolderStructure = (data) => {
    const map = {};
    const roots = [];

    // Build a map of nodeId -> node
    data.forEach((node) => {
        map[node._id] = { ...node, children: [] };
    });

    // Assign children to their parentId
    data.forEach((node) => {
        if (node.parentId && node.parentId._id) {
            const parent = map[node.parentId._id];
            if (parent) {
                parent.children.push(map[node._id]);
            }
        } else {
            roots.push(map[node._id]);
        }
    });

    return roots; // Return root nodes (without parentId)
};
