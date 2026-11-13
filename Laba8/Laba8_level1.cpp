#include <iostream>
#include <string>
using namespace std;

int main() { 
    system("chcp 65001"); 

    string game; 
    std::getline(cin, game);

    int number = game.length();
    string new_word = game.substr(1, number - 2);

    cout << new_word;
}