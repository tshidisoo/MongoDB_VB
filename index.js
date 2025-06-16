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

// Sayfa yüklendiğinde başlat
document.addEventListener('DOMContentLoaded', function() {
    loadQuestion();
});

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
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})" data-option="${index}">
                        ${String.fromCharCode(65 + index)}. ${option}
                    </div>
                `).join('')}
            </div>
        `;
    } else {
        // Kod yazma sorusu
        questionContainer.innerHTML = `
            <div class="question">${question.question}</div>
            <div class="code-section">${question.code}</div>
            <textarea class="code-input" id="code-answer" placeholder="Cevabınızı buraya yazın... (Virgülle ayırın: örnek, cevap, 123, değer)"></textarea>
        `;
    }
    
    // Navigasyon butonlarını güncelle
    updateNavigation();
    
    // Önceki cevabı yükle
    loadPreviousAnswer();
}

// Seçeneği seç
function selectOption(optionIndex) {
    // Tüm seçenekleri temizle
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Seçili seçeneği işaretle
    document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    
    // Cevabı kaydet
    userAnswers[currentQuestionIndex] = optionIndex;
}

// Önceki cevabı yükle
function loadPreviousAnswer() {
    const question = quizData[currentQuestionIndex];
    const previousAnswer = userAnswers[currentQuestionIndex];
    
    if (previousAnswer !== undefined) {
        if (question.type === 'multiple') {
            // Çoktan seçmeli için önceki seçimi işaretle
            document.querySelector(`[data-option="${previousAnswer}"]`).classList.add('selected');
        } else {
            // Kod yazma sorusu için önceki cevabı yükle
            document.getElementById('code-answer').value = previousAnswer;
        }
    }
}

// Sonraki soru
function nextQuestion() {
    // Mevcut cevabı kaydet
    saveCurrentAnswer();
    
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Önceki soru
function previousQuestion() {
    // Mevcut cevabı kaydet
    saveCurrentAnswer();
    
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Mevcut cevabı kaydet
function saveCurrentAnswer() {
    const question = quizData[currentQuestionIndex];
    
    if (question.type === 'multiple') {
        // Çoktan seçmeli cevabı zaten selectOption'da kaydedildi
    } else {
        // Kod yazma cevabını kaydet
        const codeAnswer = document.getElementById('code-answer');
        if (codeAnswer) {
            userAnswers[currentQuestionIndex] = codeAnswer.value;
        }
    }
}

// Navigasyonu güncelle
function updateNavigation() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const finishBtn = document.getElementById('finish-btn');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

// İlerleme çubuğunu güncelle
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Quiz'i bitir
function finishQuiz() {
    // Son cevabı kaydet
    saveCurrentAnswer();
    
    // Sonuçları hesapla
    calculateScore();
    
    // Sonuçları göster
    showResults();
}

// Puanı hesapla
function calculateScore() {
    score = 0;
    
    for (let i = 0; i < quizData.length; i++) {
        const question = quizData[i];
        const userAnswer = userAnswers[i];
        
        if (question.type === 'multiple') {
            if (userAnswer === question.correct) {
                score++;
            }
        } else {
            // Kod yazma soruları için basit kontrol
            if (userAnswer && userAnswer.toLowerCase().includes(question.answer.toLowerCase())) {
                score++;
            }
        }
    }
}

// Sonuçları göster
function showResults() {
    document.querySelector('.quiz-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';
    
    const percentage = Math.round((score / quizData.length) * 100);
    const correctCount = score;
    const wrongCount = quizData.length - score;
    
    document.getElementById('score-percentage').textContent = percentage + '%';
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('total-count').textContent = quizData.length;
}

// Quiz'i yeniden başlat
function restartQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    
    document.querySelector('.quiz-section').style.display = 'block';
    document.getElementById('results-section').style.display = 'none';
    
    loadQuestion();
}