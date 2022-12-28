function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const initialValue = image[sr][sc]
    const stack = [{ sr, sc }]
   
    while (stack.length) {
        const { sr, sc } = stack.pop()
        
        if (image[sr][sc] === color) {
            continue
        }
                
        if (image[sr][sc] === initialValue) {
            image[sr][sc] = color
        }

        if (image[sr-1]?.[sc] === initialValue)  {
            stack.push({ sr: sr-1, sc })
        }
        if (image[sr+1]?.[sc] === initialValue)  {
            stack.push({ sr: sr+1, sc })
        } 
        if (image[sr][sc-1] === initialValue)  {
            stack.push({ sr, sc: sc-1 })
        }
        if (image[sr][sc+1] === initialValue)  {
            stack.push({ sr, sc: sc+1 })
        }
    }
    
    return image
};
