function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialValue = image[sr][sc]
    const queue = [{ sr, sc }]
   
    while (queue.length) {
        const { sr, sc } = queue.pop()
        
        if (image[sr][sc] === color) {
            continue
        }
                
        if (image[sr][sc] === initialValue) {
            image[sr][sc] = color
        }

        if (image[sr-1]?.[sc] === initialValue)  {
            queue.push({ sr: sr-1, sc })
        }
        if (image[sr+1]?.[sc] === initialValue)  {
            queue.push({ sr: sr+1, sc })
        } 
        if (image[sr][sc-1] === initialValue)  {
            queue.push({ sr, sc: sc-1 })
        }
        if (image[sr][sc+1] === initialValue)  {
            queue.push({ sr, sc: sc+1 })
        }
    }
    
    return image
};
