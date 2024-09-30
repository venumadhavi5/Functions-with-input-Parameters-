import React, { useRef } from 'react'

function TenthMarkSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let engSpanRef = useRef();
    let telInputRef = useRef();
    let telSpanRef = useRef();
    let hinInputRef = useRef();
    let hinSpanRef = useRef();
    let mathInputRef = useRef();
    let mathSpanRef = useRef();
    let sciInputRef = useRef();
    let sciSpanRef = useRef();
    let socInputRef = useRef();
    let socSpanRef = useRef();
    let resultParaRef = useRef();
    let calculateResult = ()=>{

        let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let mathMarks = Number(mathInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let result;
                if (engMarks <35 || telMarks <35 ||hinMarks <35 || mathMarks <35 ||sciMarks <35 || socMarks <35 ) {
                    result="Failed";
                    
                } else { result="Passed";
                    
                }



                let totalmarks = engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;
                alert(`${firstName} ${lastName} got  total marks are ${totalmarks}`);
                    resultParaRef.current.innerHTML=`${firstName} ${lastName} ${result} in Tenth and got total marks are ${totalmarks}`

            
        console.log( "Caluaculate the Result")
    }
    let inputOnFocus=(inputRef)=>{
        inputRef.current.style.backgroundColor="lightpink";

    }
    let inputOnChange=(inputRef,spanRef)=>{
        if (inputRef.current.value >=0 && inputRef.current.value <=100) {
            if (inputRef.current.value >=35) {
                spanRef.current.innerHTML ="Pass";
                spanRef.current.style.backgroundColor="green";
                
            } else {
                spanRef.current.innerHTML ="Fail";
                spanRef.current.style.backgroundColor="red";
                
            }
            
        } else {
            spanRef.current.innerHTML= "Invalid";
            spanRef.current.style.backgroundColor="blue"
            
        }}
    let inputOnBlur=(inputRef)=>{
        engInputRef.current.style.backgroundColor="";

    }
    

    return (
    <div>
        <h1>Tenth MarkSheet</h1>
        <form>
            <div>
                <label>FirstName</label>
                <input ref={firstNameInputRef}
                onFocus={()=>{
                   
                    inputOnFocus(firstNameInputRef);
                   }}
                    onBlur={()=>{
                        inputOnBlur(firstNameInputRef);
                    }}
                
                ></input>
                <span></span>
            </div>
            <div>
                <label>LastName</label>
                <input ref={lastNameInputRef}
                onFocus={()=>{
                   
                    inputOnFocus(lastNameInputRef);
                   }}
                    onBlur={()=>{
                     inputOnBlur(lastNameInputRef);
                    }}
                
                ></input>
                <span></span>
                
            </div>
            <div>
                <label>English</label>
                <input type='number' ref={engInputRef}
                onChange={()=>{
                    
                    inputOnChange(engInputRef,engSpanRef);
                    }}
                  onFocus={()=>{
                   
                   inputOnFocus(engInputRef);
                  }}
                   onBlur={()=>{
                    inputOnBlur(engInputRef);
                   }}
                ></input>
                <span ref={engSpanRef}></span>
            </div>
            <div>
                <label>Telugu</label>
                <input type='number' ref={telInputRef}
                onFocus={()=>{
                    inputOnFocus(telInputRef);
                    

                }}
                onChange={()=>{
                    inputOnChange(telInputRef,telSpanRef);
                   
                }}
                onBlur={()=>{
                    inputOnBlur(telInputRef);
                }}
                
                
                ></input>
                <span ref={telSpanRef}></span>
            </div>

            <div>
                <label>Hindi</label>
                <input type='number' ref={hinInputRef}
                onChange={()=>{
                 inputOnChange(hinInputRef,hinSpanRef);

                   
                 }}
                  onFocus={()=>{
                    inputOnFocus(hinInputRef);
                  }}
                   onBlur={()=>{
                   inputOnBlur(hinInputRef);
                   }}
                
                
                
                ></input>
                <span ref={hinSpanRef}></span>
            </div>
            <div>
                <label>Maths</label>
                <input type='number' ref={mathInputRef}
                onChange={()=>{
                    inputOnChange(mathInputRef,mathSpanRef);
                    }}
                  onFocus={()=>{
                    inputOnFocus(mathInputRef);
                    
                  }}
                   onBlur={()=>{
                    inputOnBlur(mathInputRef);
                    
                   }}
                
                
                ></input>
                <span ref={mathSpanRef}></span>
            </div>
            <div>
                <label>Science</label>
                <input type='number'ref={sciInputRef}
                onChange={()=>{
                    inputOnChange(sciInputRef,sciSpanRef);
                    
                   
                 }}
                  onFocus={()=>{
                    inputOnFocus(sciInputRef);
                   
                  }}
                   onBlur={()=>{
                    inputOnBlur(sciInputRef);
                    
                   }}
                
                ></input>
                <span ref={sciSpanRef}></span>
            </div>
            <div>
                <label>Social</label>
                <input type='number'ref={socInputRef}
                onChange={()=>{
                    inputOnChange(socInputRef,socSpanRef);
                 }}
                  onFocus={()=>{
                    inputOnFocus(socInputRef);
                    
                  }}
                   onBlur={()=>{
                    inputOnBlur(socInputRef);
                    
                   }}
                
                ></input>
                <span ref={socSpanRef}></span>
            </div>
            <button type='button' onClick={()=>{
                calculateResult();

                
            }}>Calculate Result</button>
            <p ref={resultParaRef}>Please enter your marks and Click it</p>
        </form>
      

      
    </div>
  )
}

export default TenthMarkSheet
