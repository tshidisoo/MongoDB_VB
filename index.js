// Quiz verileri
const quizData = [
    // Çoktan Seçmeli Sorular (1-30)
    {
        question: "MongoDB hangi veritabanı kategorisinde yer alır?",
        options: ["SQL", "NoSQL", "NewSQL", "GraphQL"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de veriler hangi formatta saklanır?",
        options: ["JSON", "BSON", "XML", "CSV"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de tablo karşılığı nedir?",
        options: ["Database", "Document", "Collection", "Field"],
        correct: 2,
        type: "multiple"
    },
    {
        question: "MongoDB'de her belgenin benzersiz tanımlayıcısı nedir?",
        options: ["_key", "_id", "_unique", "_primary"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "NoSQL'in temel avantajı nedir?",
        options: ["Sabit şema", "ACID özellikleri", "Esneklik", "JOIN işlemleri"],
        correct: 2,
        type: "multiple"
    },
    {
        question: "MongoDB'de yatay ölçeklendirme hangi yöntemle yapılır?",
        options: ["Replication", "Sharding", "Indexing", "Caching"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de tek bir belge eklemek için hangi method kullanılır?",
        options: ["insert()", "insertOne()", "add()", "create()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de birden fazla belge eklemek için hangi method kullanılır?",
        options: ["insertAll()", "insertMany()", "addMany()", "createMany()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de belgeleri sorgulamak için hangi method kullanılır?",
        options: ["get()", "select()", "find()", "query()"],
        correct: 2,
        type: "multiple"
    },
    {
        question: "MongoDB'de tek bir belgeyi güncellemek için hangi method kullanılır?",
        options: ["update()", "updateOne()", "modify()", "change()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de belge silmek için hangi method kullanılır?",
        options: ["remove()", "deleteOne()", "drop()", "eliminate()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de 'büyük' karşılaştırması için hangi operatör kullanılır?",
        options: ["$greater", "$gt", "$big", "$larger"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de 'eşit değil' karşılaştırması için hangi operatör kullanılır?",
        options: ["$neq", "$ne", "$not", "$different"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de bir alanın var olup olmadığını kontrol etmek için hangi operatör kullanılır?",
        options: ["$has", "$exists", "$present", "$available"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de birden fazla koşulun hepsinin sağlanması için hangi operatör kullanılır?",
        options: ["$all", "$and", "$every", "$together"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de koşullardan herhangi birinin sağlanması için hangi operatör kullanılır?",
        options: ["$any", "$or", "$either", "$some"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de düzenli ifade (regex) kullanmak için hangi operatör kullanılır?",
        options: ["$pattern", "$regex", "$match", "$like"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de bir dizinin belirli uzunluğa sahip olup olmadığını kontrol etmek için hangi operatör kullanılır?",
        options: ["$length", "$size", "$count", "$array"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de belgeleri sıralamak için hangi method kullanılır?",
        options: ["order()", "sort()", "arrange()", "sequence()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de sonuç sayısını sınırlamak için hangi method kullanılır?",
        options: ["top()", "limit()", "max()", "restrict()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de belge sayısını öğrenmek için hangi method kullanılır?",
        options: ["count()", "countDocuments()", "size()", "length()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de gruplama işlemleri için hangi method kullanılır?",
        options: ["group()", "aggregate()", "collect()", "combine()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de toplam hesaplamak için hangi operatör kullanılır?",
        options: ["$total", "$sum", "$add", "$plus"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de ortalama hesaplamak için hangi operatör kullanılır?",
        options: ["$mean", "$avg", "$average", "$median"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de maksimum değeri bulmak için hangi operatör kullanılır?",
        options: ["$maximum", "$max", "$highest", "$top"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de minimum değeri bulmak için hangi operatör kullanılır?",
        options: ["$minimum", "$min", "$lowest", "$bottom"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de tarih bilgisi için hangi format kullanılır?",
        options: ["Date()", "ISODate()", "DateTime()", "TimeStamp()"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de birden fazla değerden herhangi biriyle eşleşme için hangi operatör kullanılır?",
        options: ["$any", "$in", "$match", "$contains"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de bir alanın belirli veri tipinde olup olmadığını kontrol etmek için hangi operatör kullanılır?",
        options: ["$datatype", "$type", "$typeof", "$instanceof"],
        correct: 1,
        type: "multiple"
    },
    {
        question: "MongoDB'de büyük/küçük harf duyarsız arama yapmak için regex'te hangi bayrak kullanılır?",
        options: ["g", "i", "m", "s"],
        correct: 1,
        type: "multiple"
    },

    // Kod Yazma Soruları (31-33)
    {
        question: "Aşağıdaki kod bloğunu tamamlayın: 'users' koleksiyonuna yeni bir kullanıcı ekleyin. Kullanıcının adı 'Ahmet', yaşı 25, şehri 'Ankara' olsun.",
        code: `// Kullanıcı ekleme kodu
db.users.______({
    name: "______",
    age: ______,
    city: "______"
});`,
        answer: "insertOne, Ahmet, 25, Ankara",
        type: "code"
    },
    {
        question: "Aşağıdaki kod bloğunu tamamlayın: 'products' koleksiyonundan fiyatı 1000'den büyük olan ürünleri bulun ve fiyata göre artan sırada sıralayın.",
        code: `// Ürün sorgulama kodu
db.products.find({
    price: { $______: ______ }
}).______({ price: ______ });`,
        answer: "gt, 1000, sort, 1",
        type: "code"
    },
    {
        question: "Aşağıdaki kod bloğunu tamamlayın: 'orders' koleksiyonunda kategori bazında toplam sipariş sayısını hesaplayın.",
        code: `// Gruplama kodu
db.orders.______([
    {
        $______: {
            _id: "$______",
            totalOrders: { $______: 1 }
        }
    }
]);`,
        answer: "aggregate, group, category, sum",
        type: "code"
    }
];

// Quiz durumu
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let answeredQuestions = new Set();

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
});

function initializeQuiz() {
    // Event listeners for navigation buttons
    document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('finish-btn').addEventListener('click', finishQuiz);
    document.getElementById('restart-btn').addEventListener('click', restartQuiz);

    // Initialize the quiz
    loadQuestion();
    updateScore();
}

// Soruyu yükle
function loadQuestion() {
    const question = quizData[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    
    // İlerleme çubuğunu güncelle
    updateProgress();
    
    // Soru sayacını güncelle
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    
    if (question.type === 'multiple') {
        // Çoktan seçmeli soru
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="options">
                ${question.options.map((option, index) => {
                    const isSelected = userAnswers[currentQuestionIndex] === index;
                    const isAnswered = answeredQuestions.has(currentQuestionIndex);
                    const isCorrect = isAnswered && index === question.correct;
                    const isIncorrect = isAnswered && isSelected && index !== question.correct;
                    
                    return `
                        <div class="option ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isIncorrect ? 'incorrect' : ''} ${isAnswered ? 'disabled' : ''}"
                             data-option="${index}">
                            ${String.fromCharCode(65 + index)}. ${option}
                        </div>
                    `;
                }).join('')}
            </div>
            ${answeredQuestions.has(currentQuestionIndex) ? `
                <div class="feedback ${userAnswers[currentQuestionIndex] === question.correct ? 'correct' : 'incorrect'}">
                    ${userAnswers[currentQuestionIndex] === question.correct ? 
                        '✓ Doğru!' : 
                        '✗ Yanlış! Doğru cevap: ' + question.options[question.correct]}
                </div>
            ` : ''}
        `;

        // Add click event listeners to options
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', function() {
                if (!answeredQuestions.has(currentQuestionIndex)) {
                    selectOption(parseInt(this.dataset.option));
                }
            });
        });
    } else if (question.type === 'code') {
        // Kod yazma sorusu
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="code-editor">
                <pre>${question.code}</pre>
                <textarea id="code-input" rows="10" placeholder="Kodunuzu buraya yazın...">${userAnswers[currentQuestionIndex] || ''}</textarea>
            </div>
        `;

        // Add input event listener for code questions
        const codeInput = document.getElementById('code-input');
        if (codeInput) {
            codeInput.addEventListener('input', function() {
                userAnswers[currentQuestionIndex] = this.value;
            });
        }
    }
    
    updateNavigation();
}

function selectOption(optionIndex) {
    if (answeredQuestions.has(currentQuestionIndex)) return;
    
    const question = quizData[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = optionIndex;
    answeredQuestions.add(currentQuestionIndex);
    
    if (optionIndex === question.correct) {
        score++;
        updateScore();
    }
    
    loadQuestion();
}

function updateScore() {
    document.getElementById('score').textContent = `Puan: ${score}`;
}

function calculateScore() {
    const results = {
        correct: score,
        wrong: answeredQuestions.size - score,
        total: quizData.length,
        percentage: Math.round((score / quizData.length) * 100)
    };
    return results;
}

function showResults() {
    const results = calculateScore();
    document.querySelector('.quiz-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';
    
    document.getElementById('score-percentage').textContent = `${results.percentage}%`;
    document.getElementById('correct-count').textContent = results.correct;
    document.getElementById('wrong-count').textContent = results.wrong;
    document.getElementById('total-count').textContent = results.total;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    answeredQuestions.clear();
    
    document.getElementById('results-section').style.display = 'none';
    document.querySelector('.quiz-section').style.display = 'block';
    
    loadQuestion();
    updateScore();
}

function updateProgress() {
    const progress = (answeredQuestions.size / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function updateNavigation() {
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === quizData.length - 1;
    
    if (answeredQuestions.size === quizData.length) {
        document.getElementById('finish-btn').style.display = 'inline-block';
    } else {
        document.getElementById('finish-btn').style.display = 'none';
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function finishQuiz() {
    showResults();
}