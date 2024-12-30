import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Ejercicio 1: Función para calcular el área de un cuadrado
const calcularAreaCuadrado = (lado: number): number => {
  return lado * lado;
};

// Ejercicio 2: Función para sumar los elementos de un arreglo
const sumarArreglo = (arreglo: number[]): number => {
  return arreglo.reduce((acumulado, actual) => acumulado + actual, 0);
};

// Ejercicio 3: Función para dividir los elementos de un arreglo por 5
const dividirPorCinco = (arreglo: number[]): number[] => {
  return arreglo.map((num) => num / 5);
};

// Ejercicio 4: Función para identificar si el número es par o impar
const identificarParImpar = (arreglo: number[]): string[] => {
  return arreglo.map((num) => (num % 2 === 0 ? 'par' : 'impar'));
};

// Ejercicio 5: Función para realizar operaciones con números y cadenas de texto
const realizarOperaciones = (datos: (string | number)[]): string => {
  const numericos = datos.filter((item) => typeof item === 'number') as number[];
  const texto = datos.filter((item) => typeof item === 'string') as string[];

  // Encontrar el texto mayor (por longitud)
  const mayorTexto = texto.reduce((prev, current) => (prev.length > current.length ? prev : current));

  // Operaciones con los datos numéricos
  const suma = numericos.reduce((acc, curr) => acc + curr, 0);
  const resta = numericos.reduce((acc, curr) => acc - curr);
  const multiplicacion = numericos.reduce((acc, curr) => acc * curr, 1);
  const division = numericos.reduce((acc, curr) => acc / curr);

  return `Texto mayor: ${mayorTexto}\nSuma: ${suma}, Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}`;
};

// Ejercicio 6: Función para calcular el promedio de calificaciones
interface Alumno {
  name: string;
  edad: number;
  calificacion: number;
}

const calcularPromedio = (alumnos: Alumno[]): number => {
  const totalCalificaciones = alumnos.reduce((acc, alumno) => acc + alumno.calificacion, 0);
  return totalCalificaciones / alumnos.length;
};

// Ejercicio 7: Acumulador con useState
const AppScreen = () => {
  // Estado para el acumulador
  const [acumulador, setAcumulador] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Has llegado a la pantalla principal de la app!</Text>

      {/* Ejercicio 1: Área de un cuadrado */}
      <Text style={styles.exerciseTitle}>Ejercicio 1: Área de un cuadrado</Text>
      <Text>Área de un cuadrado con lado 4: {calcularAreaCuadrado(4)}</Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 2: Suma de un arreglo */}
      <Text style={styles.exerciseTitle}>Ejercicio 2: Suma de un arreglo</Text>
      <Text>Suma de arreglo [1, 2, 3, 4, 5]: {sumarArreglo([1, 2, 3, 4, 5])}</Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 3: Dividir arreglo por 5 */}
      <Text style={styles.exerciseTitle}>Ejercicio 3: Dividir arreglo por 5</Text>
      <Text>Dividir arreglo [5, 10, 15, 20] por 5: {dividirPorCinco([5, 10, 15, 20]).join(', ')}</Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 4: Identificar par o impar */}
      <Text style={styles.exerciseTitle}>Ejercicio 4: Identificar par o impar</Text>
      <Text>Identificar si el número es par o impar [1, 2, 3, 4]: {identificarParImpar([1, 2, 3, 4]).join(', ')}</Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 5: Operaciones con arreglo de datos */}
      <Text style={styles.exerciseTitle}>Ejercicio 5: Operaciones con arreglo de datos</Text>
      <Text>
        {realizarOperaciones([7, 5, 'sistemas', 'hola', 'adios', 2])}
      </Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 6: Promedio de calificaciones */}
      <Text style={styles.exerciseTitle}>Ejercicio 6: Promedio de calificaciones</Text>
      <Text>
        Promedio de calificaciones de los alumnos:
        {calcularPromedio([
          { name: 'Viviana', edad: 19, calificacion: 10 },
          { name: 'Wendy', edad: 20, calificacion: 8 },
          { name: 'Gerson', edad: 18, calificacion: 9 },
        ])}
      </Text>

      <View style={styles.separator}></View>

      {/* Ejercicio 7: Acumulador */}
      <Text style={styles.exerciseTitle}>Ejercicio 7: Acumulador</Text>
      <Text>Acumulador: {acumulador}</Text>
      <Button title="Incrementar" onPress={() => setAcumulador(acumulador + 1)} />
      <Button title="Disminuir" onPress={() => setAcumulador(acumulador - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  separator: {
    height: 10,
  },
});

export default AppScreen;