const initialState = [
    {
        title: "List Title",
        id: 0,
        cards: [
            {
                id: 0, 
                text: "This is the first card of the first list"
            },
            {
                id: 1,
                text: "This is the second card of the first list"
            }
        ]
    },
    {
        title: "List Title",
        id: 1,
        cards: [
            {
                id: 0, 
                text: "This is the first card of the first list"
            },
            {
                id: 1,
                text: "This is the second card of the first list"
            }
        ]
    }
];

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listReducer;