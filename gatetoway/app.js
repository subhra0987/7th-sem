const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// var querySelectorAll = require('query-selector');
// var document = require('document');
// var jsdom = require("jsdom").jsdom;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("main");
});

app.get("/books",function(req,res){
  res.render("books");
});

app.get("/forms",function(req,res){
  res.render("forms");
});


app.get("/exam",function(req,res){
  res.render("exam");
});

app.get("/prev",function(req,res){
  res.render("prev");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/about",function(req,res){
  res.render("about");
});
app.get("/CPlusPlus",function(req,res){
  res.render("CPlusPlus");
});
app.get("/Python",function(req,res){
  res.render("Python");
});
app.get("/Java",function(req,res){
  res.render("Java");
});
//CN QUIZ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var score=0;
var answer;
var quizDB=[
  {
    question:"Q1: An ISP has the following chunk of CIDR-based IP addresses available with it:245.248.128.0/20. The ISP wants to give half of this chunk of addresses to Organization A, and a quarter to Organization B, while retaining the remaining with itself. Which of the following is a valid allocation of addresses to A and B? ",
    a: "245.248.136.0/21 and 245.248.128.0/22",
    b:"245.248.128.0/21 and 245.248.128.0/22",
    c:"245.248.132.0/22 and 245.248.132.0/21",
    d:" 245.248.136.0/22 and 245.248.132.0/21",
    ans:"ans1"
  },
  {
    question:"Q2:In the IPv4 addressing format, the number of networks allowed under Class C addresses is ",
    a: "2^14",
    b:"2^7",
    c:"2^21",
    d:" 2^24 ",
    ans:"ans3"
  },
  {
    question:"Q3: Which of the following transport layer protocols is used to support electronic mail? ",
    a: "SMTP",
    b:"IP",
    c:"UDP",
    d:"TCP",
    ans:"ans4"
  },
  {
    question:"Q4:The protocol data unit(PDU) for the application layer in the Internet stack is ",
    a: "Segment",
    b:"Message",
    c:"DataGram",
    d:"Frame",
    ans:"ans2"
  },
  {
    question:"Q5: If a Firewall which supports  4 layer design  can not",
    a: "Block All ICMP traffic",
    b:"Block HTTP traffic during 9:00 P.M to 5 A.M",
    c:"Stop packets incoming from a specific IP address.",
    d:"None",
    ans:"ans2"
  },
];

let questionCount=0;
var ans=quizDB[questionCount].ans;
app.get("/cnQuiz",function(req,res){
  while(questionCount<quizDB.length){
    res.render("cnQuiz",{
      question:quizDB[questionCount].question,
      option1:quizDB[questionCount].a,
      option2:quizDB[questionCount].b,
      option3:quizDB[questionCount].c,
      option4:quizDB[questionCount].d,
    });
  }
res.render("ansCN");
});

app.get("/ansCN",function(req,res){
  res.render("ansCN",{score:score});
});


app.post("/cnQuiz",function(req,res){
  if(req.body.option1=="on"){
    answer="ans1";
    if(answer==ans){
      score++;
    }
  }
  else if(req.body.option2=="on"){
    answer="ans2";
    if(answer==ans){
      score++;
    }
  }
  else if(req.body.option3=="on"){
    answer="ans3";
    if(answer==ans){
      score++;
    }
  }
  else{
    answer="ans4";
    if(answer==ans){
      score++;
    }
  }


  //cnQuiz
    questionCount++;
    if(questionCount==5){
      res.redirect("/ansCN")
    }
  else{
      res.redirect("/cnQuiz");
  }
});
//{score:score}
app.get("/ansCN",function(req,res){
  res.render("ansCN",{score:score});
});



//DMquiz !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scoredm=0;
var answerdm;
var quizDM=[
  {
    questiondm:"Q1: If x is a set and the set contains an integer which is neither positive nor negative then the set x is ____________.",
    adm: "Set is Empty",
    bdm:"Set is Non-empty",
    cdm:"Set is Finite.",
    ddm:"Set is both Non- empty and Finite.",
    ansdm:"ans4dm"
  },
  {
    questiondm:"Q2:If x ∈ N and x is prime, then x is ________ set.",
    adm: "Infinite set",
    bdm:"Finite set",
    cdm:"Empty set",
    ddm:"Not a set",
    ansdm:"ans1dm"
  },
  {
    questiondm:"Q3: If x is a set and the set contains the real number between 1 and 2, then the set is ________.",
    adm: "Empty set",
    bdm:"Finite set",
    cdm:"Infinite set",
    ddm:"None of the mentioned",
    ansdm:"ans3dm"
  },
  {
    questiondm:"Q4:Convert the set x in roster form if set x contains the positive prime number, which divides 72.",
    adm: "{∅}",
    bdm:"{2, 3}",
    cdm:"{2, 3, 7}",
    ddm:"{3, 5, 7}",
    ansdm:"ans2dm"
  },
  {
    questiondm:"Q5: Power set of empty or Null set has exactly _________ subset.",
    adm: "One",
    bdm:"Two",
    cdm:"Three",
    ddm:"Zero",
    ansdm:"ans1dm"
  },
];

let questionCountdm=0;
var ansdm=quizDM[questionCountdm].ansdm;
app.get("/dmQuiz",function(req,res){
  while(questionCountdm<quizDM.length){
    res.render("dmQuiz",{
      questiondm:quizDM[questionCountdm].questiondm,
      option1dm:quizDM[questionCountdm].adm,
      option2dm:quizDM[questionCountdm].bdm,
      option3dm:quizDM[questionCountdm].cdm,
      option4dm:quizDM[questionCountdm].ddm,
    });
  }
res.render("ansDM");
});

app.get("/ansDM",function(req,res){
  res.render("ansDM",{scoredm:scoredm});
});


app.post("/dmQuiz",function(req,res){
  if(req.body.option1dm=="on"){
    answerdm="ans1dm";
    if(answerdm==ansdm){
      scoredm++;
    }
  }
  else if(req.body.option2dm=="on"){
    answerdm="ans2dm";
    if(answerdm==ansdm){
      scoredm++;
    }
  }
  else if(req.body.option3dm=="on"){
    answerdm="ans3dm";
    if(answerdm==ansdm){
      scoredm++;
    }
  }
  else{
    answerdm="ans4dm";
    if(answerdm==ansdm){
      scoredm++;
    }
  }

    questionCountdm++;
    if(questionCountdm==5){
      res.redirect("/ansDM");
    }
  else{
      res.redirect("/dmQuiz");
  }
});
//{score:score}
app.get("/ansDM",function(req,res){
  res.render("ansDM",{scoredm:scoredm});
});

//end of dm quiz

//osQUIZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scoreos=0;
var answeros;
var quizOS=[
  {
    questionos:"Q1:  When a process is in a “Blocked” state waiting for some I/O service. When the service is completed, it goes to the __________",
    aos: "Terminated state",
    bos:"Suspended state",
    cos:"Running state",
    dos:"Ready state",
    ansos:"ans4os"
  },
  {
    questionos:"Q2: Cascading termination refers to the termination of all child processes if the parent process terminates ______",
    aos: "Normally or abnormally",
    bos:"Abnormally",
    cos:"Normally",
    dos:"None of the mentioned",
    ansos:"ans1os"
  },
  {
    questionos:"Q3: The FCFS algorithm is particularly troublesome for ____________",
    aos: "operating systems",
    bos:"multiprocessor systems",
    cos:"time sharing systems",
    dos:"multiprogramming systems",
    ansos:"ans3os"
  },
  {
    questionos:"Q4:A deadlock avoidance algorithm dynamically examines the __________ to ensure that a circular wait condition can never exist.",
    aos: "operating system",
    bos:"resources",
    cos:"system storage state",
    dos:"resource allocation state",
    ansos:"ans4os"
  },
  {
    questionos:"Q5: For an effective operating system, when to check for deadlock?",
    aos: "every time a resource request is made at fixed time intervals",
    bos:"at fixed time intervals",
    cos:"every time a resource request is made",
    dos:"none of the mentioned",
    ansos:"ans1os"
  },
];

let questionCountos=0;
var ansos=quizOS[questionCountos].ansos;
app.get("/osQuiz",function(req,res){
  while(questionCountos<quizOS.length){
    res.render("osQuiz",{
      questionos:quizOS[questionCountos].questionos,
      option1os:quizOS[questionCountos].aos,
      option2os:quizOS[questionCountos].bos,
      option3os:quizOS[questionCountos].cos,
      option4os:quizOS[questionCountos].dos,
    });
  }
res.render("ansOS");
});

app.get("/ansOS",function(req,res){
  res.render("ansOS",{scoreos:scoreos});
});


app.post("/osQuiz",function(req,res){
  if(req.body.option1os=="on"){
    answeros="ans1os";
    if(answeros==ansos){
      scoreos++;
    }
  }
  else if(req.body.option2os=="on"){
    answeros="ans2os";
    if(answeros==ansos){
      scoreos++;
    }
  }
  else if(req.body.option3os=="on"){
    answeros="ans3os";
    if(answeros==ansos){
      scoreos++;
    }
  }
  else{
    answeros="ans4os";
    if(answeros==ansos){
      scoreos++;
    }
  }

    questionCountos++;
    if(questionCountos==5){
      res.redirect("/ansOS");
    }
  else{
      res.redirect("/osQuiz");
  }
});
//{score:score}
app.get("/ansOS",function(req,res){
  res.render("ansOS",{scoreos:scoreos});
});
//end of OS QUIZ


//coaQUIZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scorecoa=0;
var answercoa;
var quizCOA=[
  {
    questioncoa:"Q1: The drawback of building a large memory with DRAM is ______________",
    acoa: "The Slow speed of operation",
    bcoa:"The large cost factor",
    ccoa:"The inefficient memory organisation",
    dcoa:"All of the mentioned",
    anscoa:"ans1coa"
  },
  {
    questioncoa:"Q2: In a 4M-bit chip organisation has a total of 19 external connections, then it has _______ address if 8 data lines are there.",
    acoa: "2",
    bcoa:"5",
    ccoa:"9",
    dcoa:"8",
    anscoa:"ans3coa"
  },
  {
    questioncoa:"Q3: The bit used to signify that the cache location is updated is ________",
    acoa: "Flag bit",
    bcoa:"Reference bit",
    ccoa:"Update bit",
    dcoa:"Dirty bit",
    anscoa:"ans4coa"
  },
  {
    questioncoa:"Q4:During a write operation if the required block is not present in the cache then ______ occurs.",
    acoa: "Write miss",
    bcoa:"Write latency",
    ccoa:"Write hit",
    dcoa:" Write delay",
    anscoa:"ans1coa"
  },
  {
    questioncoa:"Q5: The number successful accesses to memory stated as a fraction is called as _____",
    acoa: "Access rate",
    bcoa:"Success rate",
    ccoa:"Hit rate",
    dcoa:"Miss rate",
    anscoa:"ans3coa"
  },
];

let questionCountcoa=0;
var anscoa=quizCOA[questionCountcoa].anscoa;
app.get("/coaQuiz",function(req,res){
  while(questionCountcoa<quizCOA.length){
    res.render("coaQuiz",{
      questioncoa:quizCOA[questionCountcoa].questioncoa,
      option1coa:quizCOA[questionCountcoa].acoa,
      option2coa:quizCOA[questionCountcoa].bcoa,
      option3coa:quizCOA[questionCountcoa].ccoa,
      option4coa:quizCOA[questionCountcoa].dcoa,
    });
  }
res.render("ansCOA");
});

app.get("/ansCOA",function(req,res){
  res.render("ansCOA",{scorecoa:scorecoa});
});


app.post("/coaQuiz",function(req,res){
  if(req.body.option1coa=="on"){
    answercoa="ans1coa";
    if(answercoa==anscoa){
      scorecoa++;
    }
  }
  else if(req.body.option2coa=="on"){
    answercoa="ans2coa";
    if(answercoa==anscoa){
      scorecoa++;
    }
  }
  else if(req.body.option3coa=="on"){
    answercoa="ans3coa";
    if(answercoa==anscoa){
      scorecoa++;
    }
  }
  else{
    answercoa="ans4coa";
    if(answercoa==anscoa){
      scorecoa++;
    }
  }

    questionCountcoa++;
    if(questionCountcoa==5){
      res.redirect("/ansCOA");
    }
  else{
      res.redirect("/coaQuiz");
  }
});
//{score:score}
app.get("/ansCOA",function(req,res){
  res.render("ansCOA",{scorecoa:scorecoa});
});
//end of COA QUIZ



//dsQUIZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scoreds=0;
var answerds;
var quizDS=[
  {
    questionds:"Q1: Which of the following is generally used for performing tasks like creating the structure of the relations, deleting relation?",
    ads: "DDL(Data Definition Language)",
    bds:"Query",
    cds:"Relational Schema",
    dds:"DML(Data Manipulation Language)",
    ansds:"ans1ds"
  },
  {
    questionds:"Q2: Which one of the following refers to the data about data",
    ads: "Directory",
    bds:"Sub Data",
    cds:"Meta Data",
    dds:"Warehouse",
    ansds:"ans3ds"
  },
  {
    questionds:"Q3: Which of the following refers to the level of data abstraction that describes exactly how the data actually stored?",
    ads: "Conceptual Level",
    bds:"File Level",
    cds:"Logical Level",
    dds:"Physical Level",
    ansds:"ans4ds"
  },
  {
    questionds:"Q4:Rows of a relation are known as the _______.",
    ads: "Tuple",
    bds:"Degree",
    cds:"Entity",
    dds:"None",
    ansds:"ans1ds"
  },
  {
    questionds:"Q5: To which of the following the term DBA referred?",
    ads: "Data Administrator",
    bds:"Data Bank Administrator",
    cds:"Database Administrator",
    dds:"None of the above",
    ansds:"ans3ds"
  },
];

let questionCountds=0;
var ansds=quizDS[questionCountds].ansds;
app.get("/dsQuiz",function(req,res){
  while(questionCountds<quizDS.length){
    res.render("dsQuiz",{
      questionds:quizDS[questionCountds].questionds,
      option1ds:quizDS[questionCountds].ads,
      option2ds:quizDS[questionCountds].bds,
      option3ds:quizDS[questionCountds].cds,
      option4ds:quizDS[questionCountds].dds,
    });
  }
res.render("ansDS");
});

app.get("/ansDS",function(req,res){
  res.render("ansDS",{scoreds:scoreds});
});


app.post("/dsQuiz",function(req,res){
  if(req.body.option1ds=="on"){
    answerds="ans1ds";
    if(answerds==ansds){
      scoreds++;
    }
  }
  else if(req.body.option2ds=="on"){
    answerds="ans2ds";
    if(answerds==ansds){
      scoreds++;
    }
  }
  else if(req.body.option3ds=="on"){
    answerds="ans3ds";
    if(answerds==ansds){
      scoreds++;
    }
  }
  else{
    answerds="ans4ds";
    if(answerds==ansds){
      scoreds++;
    }
  }

    questionCountds++;
    if(questionCountds==5){
      res.redirect("/ansDS");
    }
  else{
      res.redirect("/dsQuiz");
  }
});
//{score:score}
app.get("/ansDS",function(req,res){
  res.render("ansDS",{scoreds:scoreds});
});
//end of ds QUIZ



//tocQUIZ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var scoretoc=0;
var answertoc;
var quizTOC=[
  {
    questiontoc:"Q1: Statement 1: Null string is accepted in Moore Machine.Statement 2: There are more than 5-Tuples in the definition of Moore Machine.",
    atoc: "Statement 1 is true and Statement 2 is true",
    btoc:"Statement 1 is true while Statement 2 is false",
    ctoc:"Statement 1 is false while Statement 2 is true",
    dtoc:"Statement 1 and Statement 2, both are false",
    anstoc:"ans1toc"
  },
  {
    questiontoc:"Q2: The total number of states and transitions required to form a moore machine that will produce residue mod 3.",
    atoc: "3 and 5",
    btoc:"2 and 4",
    ctoc:"3 and 6",
    dtoc:"2 and 5",
    anstoc:"ans3toc"
  },
  {
    questiontoc:"Q3:The O/P of Moore machine can be represented in the following format:",
    atoc: "None of the mentioned",
    btoc:"Op(t): ∑",
    ctoc:" Op(t)=δ(Op(t)i(t))",
    dtoc:"Op(t)=δ(Op(t))",
    anstoc:"ans4toc"
  },
  {
    questiontoc:"Q4:Which of the following is a correct statement?",
    atoc: " Moore machine has no accepting states",
    btoc:" Mealy machine has accepting states",
    ctoc:"We can convert Mealy to Moore but not vice versa",
    dtoc:"All of the mentioned",
    anstoc:"ans1toc"
  },
  {
    questiontoc:"Q5:  For a give Moore Machine, Given Input=’101010’, thus the output would be of length:",
    atoc: "|Input|+1",
    btoc:"|Input|",
    ctoc:"|Input|+1",
    dtoc:"Cannot be predicted",
    anstoc:"ans3toc"
  },
];

let questionCounttoc=0;
var anstoc=quizTOC[questionCounttoc].anstoc;
app.get("/tocQuiz",function(req,res){
  while(questionCounttoc<quizTOC.length){
    res.render("tocQuiz",{
      questiontoc:quizTOC[questionCounttoc].questiontoc,
      option1toc:quizTOC[questionCounttoc].atoc,
      option2toc:quizTOC[questionCounttoc].btoc,
      option3toc:quizTOC[questionCounttoc].ctoc,
      option4toc:quizTOC[questionCounttoc].dtoc,
    });
  }
res.render("ansTOC");
});

app.get("/ansTOC",function(req,res){
  res.render("ansTOC",{scoretoc:scoretoc});
});


app.post("/tocQuiz",function(req,res){
  if(req.body.option1toc=="on"){
    answertoc="ans1toc";
    if(answertoc==anstoc){
      scoretoc++;
    }
  }
  else if(req.body.option2toc=="on"){
    answertoc="ans2toc";
    if(answertoc==anstoc){
      scoretoc++;
    }
  }
  else if(req.body.option3toc=="on"){
    answertoc="ans3toc";
    if(answertoc==anstoc){
      scoretoc++;
    }
  }
  else{
    answertoc="ans4toc";
    if(answertoc==anstoc){
      scoretoc++;
    }
  }

    questionCounttoc++;
    if(questionCounttoc==5){
      res.redirect("/ansTOC");
    }
  else{
      res.redirect("/tocQuiz");
  }
});
//{score:score}
app.get("/ansTOC",function(req,res){
  res.render("ansTOC",{scoretoc:scoretoc});
});
//end of toc QUIZ


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
