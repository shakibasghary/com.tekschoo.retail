package utilities;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.opencsv.CSVWriter;

public class DataBaseUtility {

	// Java provides JDBC API for connecting to Databases
	// JDBC : Java Database Connectivity

	// 1. JDBC provides a class named Connection: In order to connect with Database
	// 2. JDBC provides a class named Statement: In order to execute or send query
	// 3. JDBC provides a class named ResultSet: Result set will store retrieved
	// data.

	private static Connection connection;
	private static Statement statement;
	private static ResultSet resultSet;

	// JDBC URL and this url will connect framework or java classes to Database
	// Syntax for postgresql: jdbc:postgresql://host:port/databaseName

	private static String url = "jdbc:postgresql://localhost:5432/DVDRental";

	// username for Database
	private static String userName = "postgres";
	// password for Database
	private static String password = "sdet";

	/**
	 * This Method will establish a connection between Java and DB using object of
	 * connection class And DriverManager.getConnection method
	 */
	public static void setupConnection() {

		try {
			connection = DriverManager.getConnection(url, userName, password);
		} catch (SQLException e) {

			e.printStackTrace();
		}

	}

	/**
	 * This method executes query and return outcome or result set as part of
	 * execution result.
	 * 
	 * @param query
	 * @return
	 */
	public static ResultSet runQuery(String query) {

		try {
			statement = connection.createStatement();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			resultSet = statement.executeQuery(query);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return resultSet;
	}

	/**
	 * This method will write all output data from result set to a CSV File. We are
	 * creating new csv file using File class obj We are writing to that file using
	 * File Writter class.
	 */
	public static void returnResult() {

		try {
			while (resultSet.next()) {
				CSVWriter csvWriter;
				// provide path for output data file
				String output = ".\\output\\book.csv";
				File file = new File(output);

				// we need to use FileWriter class to write ResultSet data from Database to CSV
				// file
				FileWriter fileWriter = new FileWriter(file);
				csvWriter = new CSVWriter(fileWriter);
				csvWriter.writeAll(resultSet, true); // <---- 'true' in here means to add column names too
				csvWriter.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * This method will close connection to DB 
	 */
	public static void closeDBConnection() {
		if (connection != null) {
			try {
				connection.close();
			} catch (Exception e) {
			} finally {
				try {
					connection.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
}