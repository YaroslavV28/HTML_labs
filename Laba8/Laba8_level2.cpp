#include <iostream>
#include <string>
using namespace std;

int main() { 
    system("chcp 65001"); 

    cout << "Введите строку, чтобы получить обратный порядок" << endl;
    string word;
    std::getline(cin, word);

    string new_word; // новая переменная 
    if (word.find(" ") != string::npos) { 
        while (word.find(" ") != string::npos) { 
            size_t count = word.rfind(" "); // ищет индексы последней " " 
            string last_word = word.substr(count + 1); // последнее слово

            word = word.substr(0, count);
            new_word += last_word + " ";
        } new_word += word;  cout << new_word;
        
       
    } else { 
        cout << word;
    }
     
}